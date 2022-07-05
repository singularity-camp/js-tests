function countLegs(
    chickens: number,
    cows: number,
    pigs: number
  ): number | string {
    let result = 0;
  
    if (chickens > 0) {
      result += chickens * 2;
    } else {
      return "chickens are not valid";
    }
    if (cows > 0) {
      result += cows * 4;
    } else {
      return "cows are not valid";
    }
    if (pigs > 0) {
      result += pigs * 4;
    } else {
      return "pigs are not valid";
    }
    return result;
  }