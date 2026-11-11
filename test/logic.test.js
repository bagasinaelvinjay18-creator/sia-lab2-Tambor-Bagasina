const test = require("node:test");
const assert = require("node:assert");
const {
    calculateWeightedGrade,
    calculateGWA
} = require("../src/logic");

test("Calculate weighted grade correctly", () => {
    assert.strictEqual(calculateWeightedGrade(1.5, 3), 4.5);
});

test("Calculate GWA correctly", () => {
    const subjects = [
        { name: "Math", grade: 1.25, units: 3 },
        { name: "English", grade: 1.50, units: 3 }
    ];

    assert.strictEqual(calculateGWA(subjects), 1.38);
});

test("Reject invalid grade", () => {
    assert.throws(() => calculateWeightedGrade(-1, 3));
});