import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from "../../components/Search";
import Providers from "../../providers/index";
import api from "../../services/";
import MockAdapter from "axios-mock-adapter";
describe("Input Component", () => {
  test("should be able to render an input", async () => {
    const apiMock = new MockAdapter(api);
    apiMock.onGet("26910000").replyOnce(200, {
      bairro: "Tarumã",
      cep: "82590300",
      cidade: "Curitiba",
      cidade_info: { area_km2: "435,036", codigo_ibge: "4106902" },
      area_km2: "435,036",
      codigo_ibge: "4106902",
      complemento: "de 5911/5912 a 7279/7280",
      estado: "PR",
      estado_info: {
        area_km2: "199.307,985",
        codigo_ibge: "41",
        nome: "Paraná",
      },
      area_km2: "199.307,985",
      codigo_ibge: "41",
      nome: "Paraná",
      logradouro: "Rodovia BR-116",
    });
    render(
      <Providers>
        <Search />
      </Providers>
    );
    const inputField = screen.getByPlaceholderText("Insira o CEP");
    const buttonField = screen.getByText("Buscar pelo CEP");
    fireEvent.change(inputField, { target: { value: "82590300" } });
    fireEvent.click(buttonField);
    await waitFor(() => {
      expect(screen.getByDisplayValue("Rodovia BR-116")).toBeInTheDocument();
    });
  });
});
