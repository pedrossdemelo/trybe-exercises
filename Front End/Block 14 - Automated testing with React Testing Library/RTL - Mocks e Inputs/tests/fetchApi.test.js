jest.mock("node-fetch");
import fetch from "node-fetch";
import { fetchDog } from "./fetchApi.js";

describe("Mocking the node fetch function to return predictable results", () => {
  it("should be able to handle a promise resolve", () => {
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve({ message: "request success" }),
    });
    const expected = "request success";
    expect(fetchDog()).resolves.toEqual(expected);
  });
  it("should be able to handle a promise reject", () => {
    fetch.mockRejectedValueOnce("request failed");
    const expected = "request failed";
    expect(fetchDog()).rejects.toEqual(expected);
  })
});
