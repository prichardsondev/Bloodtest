const express = require("express");
const router = express.Router();
const BloodTest = require("../models/bloodtest");

//get all tests from database
router.get("/", async (req, res) => {
  try {
    const tests = await BloodTest.find();
    res.send(tests);
  }
  catch (err) {
    res.status(404).send(`Resource not found`);
  }

});

//get single test by id
router.get("/:id", async (req, res) => {
  const testId = req.params.id;
  console.log(testId);
  try {
    const test = await BloodTest.findById({ _id: testId });
    res.send(test);
  }
  catch (err) {
    res.status(404).send(`Test with id of ${testId} not found`);
  }

});

//post a pet to database
router.post("/", async (req, res) => {
  // let test = new BloodTest({
  //   test: req.body.test,
  //   result: req.body.result
  // });
  // test = await test.save();
  // res.send(test);

  try {
    test = await test.save();
    res.send(test);
  } catch (err) {
    res.status(500).send(`Error saving to database ${err}`);
  }
});

router.put("/:id", async (req, res) => {
  const testId = req.params.id;
  console.log(testId);

  const test = await BloodTest.findByIdAndUpdate(
    req.params.id,
    {
      test: req.body.test,
      result: req.body.result
    },
    { new: true }
  );

  res.send(test);
});

//delete
router.delete("/:id", async (req, res) => {
  const testId = req.params.id;
  console.log(testId);
  try {
    const test = await BloodTest.findByIdAndRemove(testId);
    res.send(test);
  } catch (err) {
    res.status(404).send(`Test with id of ${testId} not found`);
  }
});

module.exports = router;
