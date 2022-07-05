import countLegs from "./index";

describe("test countLegs", () => {
  const farmTable = [
    { chickens: 4, cows: 2, pigs: 1, expected: 20 },
    { chickens: 2, cows: 1, pigs: 2, expected: 16 },
    // { chickens: -2, cows: 1, pigs: 2, expected: "chickens are not valid" },
    // { chickens: 2, cows: -1, pigs: 2, expected: "cows are not valid" },
    // { chickens: 2, cows: 1, pigs: -2, expected: "pigs are not valid" },
  ];
  test.each(farmTable)(
    "checks success countlegs ($chickens, $cows, $pigs) $expected",
    ({ chickens, cows, pigs, expected }) => {
      const result = countLegs(chickens, cows, pigs);
      expect(result).toBe(expected);
    }
  );

  test("checks fail countlegs for chickens", () => {
    expect(() => countLegs(-2, 1, 2)).toThrowError(
      new Error("chickens are not valid")
    );
  });
});
