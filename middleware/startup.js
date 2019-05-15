const express = require("express");
const logger = require("./logger");

module.exports = function (app) {
  ////uncomment the following if block to
  //use logging in development mode... Probably
  //should add some logging logic too...)
  // if (app.get("env") === "development") {
  //   app.use(logger.log);
  // }
};
