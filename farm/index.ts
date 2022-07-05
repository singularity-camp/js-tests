function countLegs(chickens: number, cows: number, pigs: number): number {
  let result = 0;

  if (chickens > 0) {
    result += chickens * 2;
  } else {
    throw new Error("chickens are not valid");
  }
  if (cows > 0) {
    result += cows * 4;
  } else {
    throw new Error("cows are not valid");
  }
  if (pigs > 0) {
    result += pigs * 4;
  } else {
    throw new Error("pigs are not valid");
  }
  return result;
}

export default countLegs;
