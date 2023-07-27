import { fireEvent, render, screen, waitFor } from "@testing-library/react";

// config para ter aceeso as rotas
import { MemoryRouter } from "react-router-dom";
import * as router from "react-router";

// componente
import Pokemons from "../Pokemons";

describe("<Pokemons /> Component", () => {
  // para controlar a função useNavigate()
  const navigate = jest.fn();

  // antes da execução de cada teste essa função é chamada
  beforeAll(() => {
    // controla o useNavigate()
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });

  it("should render correctly", async () => {
    // renderizando componente com aurl do primeiro Pokémon(bulbasaur)
    render(<Pokemons url="https://pokeapi.co/api/v2/pokemon/1" />);

    // procura se o texto bulbasaur está na tela
    const pokemonName = await screen.findByText("bulbasaur");

    await waitFor(() => {
      // espera que o texto bulbasaur esteja na tela
      expect(pokemonName).toBeInTheDocument();
    });
  });

  it("should navigate to /pokemon/bulbasaur", async () => {
    render(
      <MemoryRouter>
        <Pokemons url="https://pokeapi.co/api/v2/pokemon/1" />
      </MemoryRouter>
    );

    // procura a div
    const element = await screen.findByTestId("container_pokemon");

    // clica na div
    fireEvent.click(element);

    // vê se o useNavigate foi executado para "/pokemon/bulbasaur"
    expect(navigate).toHaveBeenCalledWith("/pokemon/bulbasaur");
  });
});
