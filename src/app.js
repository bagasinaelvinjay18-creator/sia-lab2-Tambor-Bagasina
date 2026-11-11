const express = require("express");
const path = require("path");
const { calculateGWA } = require("./logic");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        version: require("../package.json").version
    });
});

app.post("/api/calculate", (req, res) => {
    try {
        const gwa = calculateGWA(req.body.subjects);

        res.json({
            success: true,
            gwa: gwa
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

module.exports = app;