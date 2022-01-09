import generateRandomNumber from "./service.js";
jest.mock("./service", () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});
describe("generateRandomNumber", () => {
  it("should be called x amount of times and return a mocked value", () => {
    // Call the function 10 times
    for (let i = 0; i < 10; i++) {
      generateRandomNumber();
    }
    // Validate that it was called and called 10 times
    expect(generateRandomNumber).toHaveBeenCalled();
    expect(generateRandomNumber).toHaveBeenCalledTimes(10);
    // Mock the return value of the function to be 10
    generateRandomNumber.mockReturnValue(10);
    // Validate that the return value is 10
    expect(generateRandomNumber()).toBe(10);
  });
  it("should obey the mocked implementation once", () => {
    // Mock the implementation of the function to be a division
    generateRandomNumber.mockImplementationOnce((num, num2) => {
      return num / num2;
    });
    const result = generateRandomNumber(10, 2);
    expect(result).toBe(5);
    expect(generateRandomNumber).toHaveBeenCalledTimes(12);
    expect(generateRandomNumber()).toBe(10);
  })
});
