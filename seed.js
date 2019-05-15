const BloodTest = require("./models/bloodtest");
const BloodTestHighLow = require("./models/bloodtesthighlow");

require("./database/db")();

async function seedBloodTestCollection() {
    await BloodTest.insertMany(
        [
            { "test": "ALBUMIN", "result": 3 },
            { "test": "ALP", "result": 163 },
            { "test": "ALT", "result": 61 },
            { "test": "AST", "result": 27 },
            { "test": "GGT", "result": 8 },
            { "test": "BUN", "result": 41 },
            { "test": "GLUCOSE", "result": 50 },
            { "test": "Sodium", "result": 148 },
            { "test": "ALP", "result": 2 }
        ]
    )
}

async function seedHighLowCollection() {
    await BloodTestHighLow.insertMany(
        [
            { "test": "ALT", "low": 18, "high": 121 },
            { "test": "ALP", "low": 5, "high": 160 },
            { "test": "AST", "low": 16, "high": 55 },
            { "test": "GGT", "low": 0, "high": 13 },
            { "test": "ALBUMIN", "low": 2.7, "high": 3.9 },
            { "test": "BUN", "low": 9, "high": 31 },
            { "test": "GLUCOSE", "low": 63, "high": 114 },
            { "test": "Sodium", "low": 142, "high": 152 }
        ]
    )
}

/*
    seedHighLowCollection will run regardless of
    err from seedBloodTestCollection promise
*/
seedBloodTestCollection()
    .catch((err) => {
        console.log(err);
    });

seedHighLowCollection()
    .catch((err) => {
        console.log(err);
    });

/*
seedHighLowCollection will not execute
if seedBloodTestCollection fails
*/

// seedBloodTestCollection()
//     .then(() => {
//         return seedHighLowCollection();
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// async function seedBloodTestCollection() {
//     await BloodTest.insertMany(
//         [
//             { "test": "ALBUMIN", "result": 3 },
//             { "test": "ALP", "result": 163 },
//             { "test": "ALT", "result": 61 },
//             { "test": "AST", "result": 27 },
//             { "test": "GGT", "result": 8 },
//             { "test": "BUN", "result": 41 },
//             { "test": "GLUCOSE", "result": 50 },
//             { "test": "Sodium", "result": 148 },
//             { "test": "ALP", "result": 2 }
//         ]
//     )
// }

// async function seedHighLowCollection() {
//     await BloodTestHighLow.insertMany(
//         [
//             { "test": "ALT", "low": 18, "high": 121 },
//             { "test": "ALP", "low": 5, "high": 160 },
//             { "test": "AST", "low": 16, "high": 55 },
//             { "test": "GGT", "low": 0, "high": 13 },
//             { "test": "ALBUMIN", "low": 2.7, "high": 3.9 },
//             { "test": "BUN", "low": 9, "high": 31 },
//             { "test": "GLUCOSE", "low": 63, "high": 114 },
//             { "test": "Sodium", "low": 142, "high": 152 }
//         ]
//     )
// }

