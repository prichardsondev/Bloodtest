const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const BloodTestHighLow = require("../models/bloodtesthighlow");

router.get("/", async (req, res) => {
    //testHighLow is an object - instance of BloodTest class
    const testsHighLow = await BloodTestHighLow.find();
    res.send(testsHighLow);
});

router.post("/", async (req, res) => {
    let testHighLow = new BloodTestHighLow({
        test: req.body.test,
        high: req.body.high,
        low: req.body.low
    });

    testHighLow = await testHighLow.save();

    res.send(testHighLow);
});

module.exports = router;
