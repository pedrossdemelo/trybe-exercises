import * as string from "./functions.js";

describe("Redefining and restoring the functions implementation", () => {
  it("should redefine and restore the toUpperCase function", () => {
    // Testing the original implementation
    expect(string.toUpperCase("testing")).toBe("TESTING");
    // New implementation
    jest
      .spyOn(string, "toUpperCase")
      .mockImplementation((str) => str.toLowerCase());
    // Testing the new implementation
    expect(string.toUpperCase("TESTING")).toBe("testing");
    // Restoring the original implementation
    string.toUpperCase.mockRestore();
    // Testing the original implementation
    expect(string.toUpperCase("testing")).toBe("TESTING");
  });
  it("should redefine and restore the firstLetter function", () => {
    // Testing the original implementation
    expect(string.firstLetter("testing")).toBe("t");
    // New implementation
    jest
      .spyOn(string, "firstLetter")
      .mockImplementation((str) => str.at(-1));
    // Testing the new implementation
    expect(string.firstLetter("testing")).toBe("g");
    // Restoring the original implementation
    string.firstLetter.mockRestore();
    // Testing the original implementation
    expect(string.firstLetter("testing")).toBe("t");
  });
  it("should redefine and restore the concat function", () => {
    // Testing the original implementation
    expect(string.concat("test", "ing")).toBe("testing");
    // New implementation
    jest
      .spyOn(string, "concat")
      .mockImplementation((str1, str2, str3) => str1.concat(str2, str3));
    // Testing the new implementation
    expect(string.concat("test", "ing", " jest")).toBe("testing jest");
    // Restoring the original implementation
    string.concat.mockRestore();
    // Testing the original implementation
    expect(string.concat("test", "ing")).toBe("testing");
  });
});