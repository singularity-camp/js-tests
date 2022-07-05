import basketball from "./index";
describe("test basketball", () => {
  const fooTable = [
    { n: 1, m: 1, expected: 5 },
    { n: 7, m: 5, expected: 29 },
    { n: 38, m: 8, expected: 100 },
    { n: NaN, m: 7, expected: "Fix your input" },
    { n: 8, m: NaN, expected: "Fix your input" },
    { n: 0, m: 8, expected: 24 },
    { n: 7, m: 0, expected: 14 },
    { n: -7, m: 0, expected: "Fix your input" },
    { n: 5, m: -8, expected: "Fix your input" },
    { n: -5, m: -8, expected: "Fix your input" },
    // { n: null, m: null, expected: "fix your input" },
    // { n: null, m: 8, expected: "fix your input" },
    // { n: 8, m: null, expected: "fix your input" },
  ];
  test.each(fooTable)(
    "checks basketball ($n) ($m) $expected",
    ({ n, m, expected }) => {
      const res = basketball(n, m);
      expect(res).toBe(expected);
    }
  );
});
