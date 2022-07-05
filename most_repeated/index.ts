function most_repeated(word) {
    const wordtwo = word.replace(/[^a-zA-Z1-9]/g, "");
    let countMax = 0;
    for (let i = 0; i < wordtwo.length; i++) {
      let count = 0;
      for (let j = i; j < wordtwo.length; j++) {
        if (wordtwo[i] === wordtwo[j]) {
          count++;
        }
      }
      if (count > countMax) {
        countMax = count;
      }
    }
    return countMax;
  }
  
  most_repeated("1882 - 16 March 1942");