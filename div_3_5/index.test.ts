
import divisible from "./index";

describe("test divisible", () => {
  const divisibleTable = [
    { n: 1, expected: 0 },
    { n: 4, expected: 1 },
    { n: 6, expected: 3 },
    { n: -1, expected: "error" },
    { n: "asd", expected: "error" },
    { n: null, expected: "error" },
    { n: undefined, expected: "error" },
    { n: false, expected: "error" },
    { n: {}, expected: "error" },
  ];
  test.each(divisibleTable)(
    "checks divisibleTable ($n) $expected",
    ({ n, expected }) => {
      const res = divisible(n);
      expect(res).toBe(expected);
    }
  );
});