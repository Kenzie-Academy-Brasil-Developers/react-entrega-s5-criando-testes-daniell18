import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../../components/Search";
describe("Input Component", () => {
  test("should be able to render an input", () => {
    render(<Search />);
    const buttonField = screen.getByText("Buscar pelo CEP");
    expect(buttonField).toBeTruthy();
  });
});
