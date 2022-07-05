import most_repeated from "./index";

describe("test", () => {
  const mostrepeated = [
    { word: "1882 - 16 March 1942", expected: 3 },
    { word: "hello", expected: 2 },
    { word: "hhhhlllleeeeezzz", expected: 5 },
  ];
  test.each(mostrepeated)("", ({ word, expected }) => {
    const res = most_repeated(word);
    expect(res).toBe(expected);
  });
});
