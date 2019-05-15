const BloodTest = require("../models/bloodtest");
const BloodTestHighLow = require("../models/bloodtesthighlow");
const BloodTestReport = require("../models/bloodtestreport");

function mapRange(result, in_min, in_max, out_min, out_max) {
  let error = false; //add logic to validate data set error
  if (error) {
    throw new Error("Bad mapRange data")
  }
  else {
    return new Promise((resolve) => {
      resolve(
        Math.floor(
          ((result - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
        )
      );
    });
  }
}
module.exports.mapRange = mapRange;

function createGraph(flag, rangePosition) {

  let error = false; //add logic to validate data set error
  if (error) {
    throw new Error("Bad graph data")
  }
  else {
    return new Promise((resolve) => {
      //convert position in range to position in range 1-10

      let graph = "";

      if (flag === "low") {
        graph = "[_x_|___________|___]";
      } else if (flag === "high") {
        graph = "[___|___________|_x_]";
      } else {
        graph += "[___|";

        for (let i = 1; i <= 11; i++) {
          if (i == rangePosition) graph += "x";
          else graph += "_";
        }

        graph += "|___]";
      }

      resolve(graph);
    });
  }


};

module.exports.createGraph = createGraph;

function createFlag(result, low, high) {

  return new Promise((resolve, reject) => {
    let flag = result >= low && result <= high ? "range" : result < low ? "low" : "high";
    resolve(
      flag
    );
  });
}

module.exports.createFlag = createFlag;

async function reportData(testDoc, highLowDoc) {
  //calc flag
  let flag = await createFlag(testDoc.result, highLowDoc.low, highLowDoc.high);


  //map data
  let range = await mapRange(
    testDoc.result,
    highLowDoc.low,
    highLowDoc.high,
    1,
    11
  );

  //calc graph
  let graph = await createGraph(
    flag,
    range
  );


  //create instance of bloodTestReport class
  let report = await createReportDoc(
    testDoc.test,
    testDoc.result,
    highLowDoc.high,
    highLowDoc.low,
    flag,
    graph
  );



  //write to collection
  await report.save();
}

function createReportDoc(test, result, high, low, flag, graph) {
  return new Promise((resolve, reject) => {
    let reportDoc = new BloodTestReport({
      test: test,
      result: result,
      high: high,
      low: low,
      flag: flag,
      graph: graph
    });
    resolve(reportDoc);
  });
}

async function runReports() {
  const tests = await BloodTest.find();
  const testsHighLow = await BloodTestHighLow.find();

  //match em up => long hand...
  tests.forEach(testDoc => {
    testsHighLow.forEach(highLowDoc => {
      if (testDoc.test === highLowDoc.test) {
        reportData(testDoc, highLowDoc);
      }
    });
  });
}

module.exports.runReports = runReports;
