import { triangle_area } from "./index";

test.each([
  [3, 4, 5, 6],
  [7, 4, 6, 11.98],
  [10, 10, 10, 43.30],
  [1, 1, 1, 0.43],
  [1, 2, 1, 0],
  [1, 2, 5, 0],
  [7, 7, 5, 16.35],
  [27, 12, 35, 136.01],
  [0, 0, 0, 0],
  [-2, 5, 3, 0]
])(
  "test triangle area %i, %i %i score: %i",
  async (a, b, c, score) => {
    expect(triangle_area(a, b, c)).toBe(score);
  }
);