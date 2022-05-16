import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("Testing the entire application", () => {
  it("should renders all essential components", () => {
    render(<App />);
    const digimonInput = screen.getByTestId("search-input");
    const searchBtn = screen.getByTestId("search-button");
    const callToAction = screen.getByRole("heading", { level: 1 });

    expect(digimonInput).toBeInTheDocument();
    expect(digimonInput).toHaveValue("");

    expect(searchBtn).toBeInTheDocument();
    expect(searchBtn).toHaveTextContent("Search Digimon");

    expect(callToAction).toBeInTheDocument();
    expect(callToAction).toHaveTextContent("Faça uma pesquisa");
  });

  it("should be able to receive user input", () => {
    render(<App />);
    userEvent.type(screen.getByTestId("search-input"), "Pikachu");
    expect(screen.getByTestId("search-input")).toHaveValue("Pikachu");
  });

  it("should be able to fetch digimon and render it to the screen", async () => {
    const digimonObject = [
      {
        name: "Koromon",
        img: "https://digimon.shadowsmith.com/img/koromon.jpg",
        level: "In Training",
      },
    ];

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(digimonObject),
    });

    render(<App />);

    const searchBtn = screen.getByTestId("search-button");
    const digimonInput = screen.getByTestId("search-input");
    userEvent.type(digimonInput, "Koromon");
    userEvent.click(searchBtn);

    const trainingStatus = await screen.findByText("level: In Training");
    const imgDigimon = await screen.getByRole("img");
    expect(trainingStatus).toBeInTheDocument();
    expect(imgDigimon).toBeInTheDocument();

    expect(fetch).toBeCalledTimes(1);
  });
});
