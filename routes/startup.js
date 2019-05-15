const express = require("express");
const test = require("./bloodtest");
const highlow = require("./bloodtesthighlow");
const testreport = require("./bloodtestreport");
const home = require("./home");

module.exports = function (app) {
  app.use(express.json());
  app.use(express.static("public"));
  app.use("/", home);
  app.use("/pets/tests", test);
  app.use("/pets/highlow", highlow);
  app.use("/pets/testsreport", testreport);
};
