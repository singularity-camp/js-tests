import countLegs from "./index";

describe("test countLegs", () => {
  const farmTable = [
    { chickens: 4, cows: 2, pigs: 1, expected: 20 },
    { chickens: 2, cows: 1, pigs: 2, expected: 16 },
  ];
  test.each(farmTable)(
    "checks countlegs ($chickens, $cows, $pigs) $expected",
    ({ chickens, cows, pigs, expected }) => {
      const result = countLegs(chickens, cows, pigs);
      expect(result).toBe(expected);
    }
  );
});