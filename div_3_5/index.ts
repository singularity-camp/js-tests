function divisible(n: number) {
  let count = 0;
  if (n > 1 && typeof n === "number") {
    for (let i = 0; i < n; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        count = count + 1;
      }
    }
    return count;
  }
}

export default divisible;
