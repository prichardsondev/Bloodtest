const mongoose = require("mongoose");
const express = require("express");

//schema - what our data looks like
const schema = new mongoose.Schema({
    test: String,
    low: Number,
    high: Number,
    date: { type: Date, default: Date.now() }
});

const BloodTestHighLow = mongoose.model("BloodTestHighLow", schema);

module.exports = BloodTestHighLow;
