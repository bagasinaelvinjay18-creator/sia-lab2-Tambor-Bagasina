function calculateWeightedGrade(grade, units) {
    if (
        typeof grade !== "number" ||
        typeof units !== "number" ||
        !Number.isFinite(grade) ||
        !Number.isFinite(units) ||
        grade <= 0 ||
        units <= 0
    ) {
        throw new Error("Invalid grade or units.");
    }

    return grade * units;
}

function calculateGWA(subjects) {
    if (!Array.isArray(subjects) || subjects.length === 0) {
        throw new Error("At least one subject is required.");
    }

    let totalWeightedGrade = 0;
    let totalUnits = 0;

    for (const subject of subjects) {
        if (!subject.name || !subject.name.trim()) {
            throw new Error("Subject name is required.");
        }

        totalWeightedGrade += calculateWeightedGrade(
            subject.grade,
            subject.units
        );

        totalUnits += subject.units;
    }

    return Number((totalWeightedGrade / totalUnits).toFixed(2));
}

module.exports = {
    calculateWeightedGrade,
    calculateGWA
};