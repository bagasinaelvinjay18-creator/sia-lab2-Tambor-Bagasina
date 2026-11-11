const test = require("node:test");
const assert = require("node:assert");
const request = require("supertest");
const app = require("../src/app");

test("Health endpoint returns ok", async () => {
    const response = await request(app).get("/health");

    assert.strictEqual(response.status, 200);
    assert.strictEqual(response.body.status, "ok");
});

test("GWA API calculates correctly", async () => {
    const response = await request(app)
        .post("/api/calculate")
        .send({
            subjects: [
                { name: "Math", grade: 1.25, units: 3 },
                { name: "English", grade: 1.50, units: 3 }
            ]
        });

    assert.strictEqual(response.status, 200);
    assert.strictEqual(response.body.gwa, 1.38);
});