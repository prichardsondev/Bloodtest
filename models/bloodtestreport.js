const mongoose = require("mongoose");
const express = require("express");

//schema - what our data looks like
const schema = new mongoose.Schema({
    test: String,
    result: Number,
    high: Number,
    low: Number,
    flag: String,
    graph: String,
    date: { type: Date, default: Date.now() }
});

const BloodTestReport = mongoose.model("BloodTestReport" + timeStamp(), schema);

module.exports = BloodTestReport;

function timeStamp() {
    return Math.floor(new Date() / 1000);
}
