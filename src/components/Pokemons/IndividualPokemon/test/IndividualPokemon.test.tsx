import { fireEvent, render, screen } from "@testing-library/react";

// config para ter aceeso as rotas
import { MemoryRouter } from "react-router-dom";
import * as router from "react-router";

// componente
import IndividualPokemon from "../IndividualPokemon";

describe("IndividualPokemon Component", () => {
  // para controlar a função useNavigate()
  const navigate = jest.fn();

  // antes da execução de cada teste essa função é chamada
  beforeAll(() => {
    // controla o useNavigate()
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);

    // Define o dado falso no localStorage
    localStorage.setItem("Pokemon", "8");
  });

  afterAll(() => {
    // Limpa o dado falso do localStorage
    localStorage.removeItem("Pokemon");
  });
  
  it("should back in home page on click", async () => {
    // renderiza o elemento já com a  "memória" das rotas
    render(
      <MemoryRouter>
        <IndividualPokemon />
      </MemoryRouter>
    );

    // procura a primeira imagem disponível(seta para voltar para a home)
    const element = await screen.findAllByRole("img");

    // clica na imagem
    fireEvent.click(element[0]);

    // vê se o useNavigate foi executado para "/API_Poke"
    expect(navigate).toHaveBeenCalledWith("/API_Poke");
  });

  it("should go back Pokémon on click", async () => {
    // renderiza o elemento já com a "memória" das rotas
    render(
      <MemoryRouter>
        <IndividualPokemon />
      </MemoryRouter>
    );

    // procura a terceira imagem disponível(seta para ir para o pokémon anterior )
    const element = await screen.findAllByRole("img");

    // clica na imagem
    fireEvent.click(element[2]);

    // acessando o dado atual do localStorage de Pokémon(é 8 por causa que eu defini ele no beforeEach())
    const currentPokemon = localStorage.getItem("Pokemon");

    // vê se o dado do localStorage diminuiu, consequentemente muda o pokémon
    expect(currentPokemon).toBe("7");
  });

  it("should go next Pokémon on click", async () => {
    // renderiza o elemento já com a "memória" das rotas
    render(
      <MemoryRouter>
        <IndividualPokemon />
      </MemoryRouter>
    );

    // procura a quinta imagem disponível(seta para ir para o próximo pokémon)
    const element = await screen.findAllByRole("img");

    // clica na imagem
    fireEvent.click(element[4]);

    // acessando o dado atual do localStorage de Pokémon(é 8 por causa que eu defini ele no beforeEach())
    const currentPokemon = localStorage.getItem("Pokemon");

    // vê se o dado do localStorage aumentou, consequentemente muda o pokémon
    expect(currentPokemon).toBe("8");
  });
});
