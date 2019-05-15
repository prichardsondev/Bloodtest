const mongoose = require("mongoose");

//schema - what our data looks like
const schema = new mongoose.Schema({
  test: { type: String, required: true },
  result: { type: Number, required: true },
  date: { type: Date, default: Date.now() }
});

//class - model our in memory objects which are tests
//PascalTest for a class
const BloodTest = mongoose.model("BloodTest", schema);

module.exports = BloodTest;
