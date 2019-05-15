const bloodtestReport = require("../../logic/report");

describe("report", () => {

  //use dynamic testing with loop - cool stuff https://stackoverflow.com/questions/45713938/jest-looping-through-dynamic-test-cases
  describe("mapRange", () => {
    //generated via excel file ../../../excel/generate_test_data.xlsx

    const tests = [
      { v: 1, l: 1, h: 11, r: 1 },
      { v: 11, l: 1, h: 11, r: 11 },
      { v: 6, l: 1, h: 11, r: 6 },
      { v: 50, l: 1, h: 99, r: 6 },
      { v: 163, l: 5, h: 160, r: 11 },
      { v: 104, l: 10, h: 200, r: 5 },
      { v: 3, l: 2.7, h: 3.9, r: 3 },
      { v: 148, l: 142, h: 152, r: 7 },
      { v: 50, l: 40, h: 100, r: 2 },

    ];

    for (let i = 0; i < tests.length; i++) {
      it(`it should return ${tests[i].r} given result:${tests[i].v},in low:${tests[i].l}, in high:${tests[i].h}, out low 1, out high 11 `,
        () => {
          return expect(bloodtestReport.mapRange(tests[i].v, tests[i].l, tests[i].h, 1, 11)).resolves.toBe(tests[i].r);
        });
    }
  });

  //test createFlag
  describe("createFlag", () => {
    it("should return low given a result of 1, a low value of 10 and a high value of 20", () => {
      return expect(bloodtestReport.createFlag(1, 10, 20)).resolves.toBe("low");
    });

    it("should return high given a result of 21, a low value of 10 and a high value of 20", () => {
      return expect(bloodtestReport.createFlag(21, 10, 20)).resolves.toBe("high");
    });

    it("should return range given a result of 6, a low value of 1 and a high value of 10", () => {
      return expect(bloodtestReport.createFlag(6, 1, 10)).resolves.toBe("range");
    });


    //other createFlag tests here
  });


  //test createGraph
  describe("createGraph", () => {
    it("should return [_x_|___________|___] given a flag of low and any value", () => {
      return expect(bloodtestReport.createGraph("low", 1)).resolves.toBe("[_x_|___________|___]");
    });

    it("should return [___|___________|_x_] given a flag of high and any value", () => {
      return expect(bloodtestReport.createGraph("high", 1)).resolves.toBe("[___|___________|_x_]");
    });

    it("should return [___|x__________|___] given a flag of range and a value of 1", () => {
      return expect(bloodtestReport.createGraph("range", 1)).resolves.toBe("[___|x__________|___]");
    });

    it("should return [___|_____x_____|___] given a flag of range and a value of 6", () => {
      return expect(bloodtestReport.createGraph("range", 6)).resolves.toBe("[___|_____x_____|___]");
    });

    it("should return [___|__________x|___] given a flag of range and a value of 11", () => {
      return expect(bloodtestReport.createGraph("range", 11)).resolves.toBe("[___|__________x|___]");
    });

    //other createGraph tests here

  })
});
