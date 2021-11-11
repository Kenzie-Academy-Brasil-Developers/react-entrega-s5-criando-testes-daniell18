import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from "../../components/Search";
import Providers from "../../providers/index";
import api from "../../services/";
import MockAdapter from "axios-mock-adapter";
describe("Input Component", () => {
  test("should be able to render an input", async () => {
    const apiMock = new MockAdapter(api);
    apiMock.onGet("26910000").replyOnce(200, {});
    render(
      <Providers>
        <Search />
      </Providers>
    );
    const inputField = screen.getByPlaceholderText("Insira o CEP");
    const buttonField = screen.getByRole("button");
    fireEvent.change(inputField, { target: { value: "26910000" } });
    fireEvent.click(buttonField);
    await waitFor(() => {
      expect(inputField).toHaveValue(26910000);
    });
  });
});
