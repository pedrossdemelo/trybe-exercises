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
    generateRandomNumber.mockImplementationOnce((num, num2) => num / num2);
    const result = generateRandomNumber(10, 2);
    expect(result).toBe(5);
    expect(generateRandomNumber).toHaveBeenCalledTimes(12);
    expect(generateRandomNumber()).toBe(10);
  });
  it("should be able to receive a new default implementation", () => {
    // Mock a new default implementation
    generateRandomNumber.mockImplementation(
      (num, num2, num3) => num * num2 * num3
    );
    const result = generateRandomNumber(10, 2, 3);
    const result2 = generateRandomNumber(10, 2, 4);
    expect(result).toBe(60);
    expect(result2).toBe(80);
    // Validate that the function was called with the new implementation
    expect(generateRandomNumber).toHaveBeenCalledWith(10, 2, 3);
    expect(generateRandomNumber).toHaveBeenCalledWith(10, 2, 4);
    // Create a new mock implementation
    generateRandomNumber.mockImplementation((num) => num * 2);
    const result3 = generateRandomNumber(10);
    const result4 = generateRandomNumber(20);
    expect(result3).toBe(20);
    expect(result4).toBe(40);
    // Validate that the function was called with the new implementation
    expect(generateRandomNumber).toHaveBeenCalledWith(10);
    expect(generateRandomNumber).toHaveBeenCalledWith(20);
  });
});
