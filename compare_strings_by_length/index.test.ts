import comp from "./index";

describe("test foobar", () => {
  const fooTable = [
    { a: "AB", b: "CD", expected: true },
    { a: "A B", b: "CD", expected: false },
    { a: "AB", b: "C ", expected: false },
    { a: " ", b: "  ", expected: false },
    { a: null, b: "CD", expected: false },
    { a: undefined, b: "CD", expected: false },
    { a: 12, b: "CD", expected: false },
    { a: true, b: "CD", expected: false },
    { a: {}, b: "CD", expected: false },
  ];
  test.each(fooTable)(
    "checks foobar ($a), ($b) $expected",
    ({ a, b, expected }) => {
      const res = comp(a, b);
      expect(res).toBe(expected);
    }
  );
});
