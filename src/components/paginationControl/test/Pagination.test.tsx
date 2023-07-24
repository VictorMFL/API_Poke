import { fireEvent, render, screen } from "@testing-library/react";

import PaginationControl from "../Pagination";

import { DataContext, DataContextProps } from "../../../context/data/useData";

describe("PaginationControl Component", () => {
  // Dados que tem dentro do contexto
  const contextData: DataContextProps = {
    getApi: jest.fn(),
    data: [{ count: 1, next: "", previous: "", results: [] }],
    previousPage: jest.fn(),
    nextPage: jest.fn(),
    pokemonLimit: "Pokemon",
    setPokemonLimit: jest.fn(),
  };

  it("should go to previous page on click", async () => {
    // renderizando elementos
    render(
      <DataContext.Provider value={contextData}>
        <PaginationControl />
      </DataContext.Provider>
    );

    // acessando o Próximo para passar de página
    const nextPage = screen.getByText("Próximo");

    // clicando no Próximo para a opção de Anterior aparecer
    fireEvent.click(nextPage);

    // acessando o Anterior(texto e icone)
    const previousPageText = await screen.findByText("Anterior");
    const previousPageIcon = await screen.findAllByRole("img");

    // clicando no anterior(texto e icone)
    fireEvent.click(previousPageText);
    fireEvent.click(previousPageIcon[0]);

    // vendo se a funçãp previousPage foi executada 2 vezes.
    expect(contextData.previousPage).toHaveBeenCalledTimes(2);
  });

  it("should go to next page on click", () => {
    // renderizando elementos
    render(
      <DataContext.Provider value={contextData}>
        <PaginationControl />
      </DataContext.Provider>
    );

    // acessando o Próximo(texto e icone)
    const nextPageText = screen.getByText("Próximo");
    const nextPageIcon = screen.getAllByRole("img");

    // clicando no Próximo(texto e icone)
    fireEvent.click(nextPageIcon[1]);
    fireEvent.click(nextPageText);

    // vendo se a função foi executada 3 vezes, pois ela já foi chamada uma vez para testar o anterior.
    expect(contextData.nextPage).toHaveBeenCalledTimes(3);
  });
});
