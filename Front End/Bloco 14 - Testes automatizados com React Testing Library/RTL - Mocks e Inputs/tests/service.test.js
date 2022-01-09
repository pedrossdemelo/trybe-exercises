import generateRandomNumber from "./service.js";
jest.mock("./service", () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});
describe("generateRandomNumber", () => {
  it("should be called x amount of times", () => {
    // Mock the return value of the function to 10
    generateRandomNumber.mockReturnValue(10);
    // Call the function 10 times
    for (let i = 0; i < 10; i++) {
      generateRandomNumber();
    }
    // Validate that it was called and called 10 times
    expect(generateRandomNumber).toHaveBeenCalled();
    expect(generateRandomNumber).toHaveBeenCalledTimes(10);
  });
});
