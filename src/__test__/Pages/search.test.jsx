import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from "../../components/Search";
describe("Input Component", () => {
  test("should be able to render an input", async () => {
    render(<Search />);
    const inputField = screen.getByPlaceholderText("Insira o CEP");
    const buttonField = screen.getByText("Buscar pelo CEP");
    fireEvent.change(inputField, { target: { value: "26910000" } });
    await waitFor(() => {
      expect(inputField.value).toBeTruthy();
    });
    fireEvent.click(buttonField);
  });
});
