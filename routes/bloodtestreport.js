const mongoose = require("mongoose");
const express = require("express");
const BloodTestReport = require("../models/bloodtestreport");
const logic = require("../logic/report");

const router = express.Router();

//get all tests from database
router.get("/", async (req, res) => {
    await logic.runReports();
    const tests = await BloodTestReport.find();
    res.send(tests);
});

module.exports = router;
