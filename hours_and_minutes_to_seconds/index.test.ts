describe("test", () => {
    const toMinutes = [
      { hour: 1, minutes: 1, expected: 61 },
      { hour: 1, minutes: 1, expected: 61 },
      { hour: 1, minutes: 1, expected: 61 },
    ];
    test.each(toMinutes)("", ({ hour, minutes, expected }) => {
      const res = convert(hour, minutes);
      expect(res).toBe(expected);
    });
  });