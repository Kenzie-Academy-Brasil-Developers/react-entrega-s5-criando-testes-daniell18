import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Search from "../../components/Search";
import Providers from "../../providers";
describe("Input Component", () => {
  test("should be able to render an input", async () => {
    render(
      <Providers>
        <Search />
      </Providers>
    );
    const inputField = screen.getByPlaceholderText("Insira o CEP");

    await waitFor(() => {
      expect(inputField).toBeTruthy();
    });
  });
});
