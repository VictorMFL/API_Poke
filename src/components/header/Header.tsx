import { useState, useRef, ChangeEvent, FormEvent, useEffect } from "react";

// icone da Pokebola
import Poke from "/pokebola.svg";

// Context
import { useGridPokemons } from "../../context/gridPokemons/GridPokemons";

// Hook com os dados de 1000 Pokémons
import useAllPokemons from "../../hooks/useAllPokemons";

// Resultado mostrado na pesquisa
import Pokemons from "../Pokemons/Pokemons";

// Style
import * as S from "./styles";
import { useDataContext } from "../../context/data/useData";

const Header = () => {
  const [search, setSearch] = useState<string>("");
  const { numberGrid, handleSelectChange } = useGridPokemons();
  const { pokemonLimit, setPokemonLimit, getApi } = useDataContext();

  const { AllPokemons } = useAllPokemons();

  const handleSearchChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  };

  const pokemonLimitChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    setPokemonLimit(target.value);
    console.log(pokemonLimit)
  };

  const inputRef = useRef<HTMLInputElement>(null);

  function clearSearch() {
    setSearch("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  const filteredData =
    AllPokemons &&
    AllPokemons[0].results.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    getApi()
  }, [pokemonLimit])

  return (
    <>
      <S.Header>
        <S.Container>
          <S.IconPokeball src={Poke} alt="Icone de uma Pokébola" />
          <S.Title>Poke API</S.Title>
        </S.Container>
        <S.Container>
          <S.Form onSubmit={submitSearch}>
            <S.Input
              type="text"
              placeholder="Pesquisar"
              required
              ref={inputRef}
              onChange={handleSearchChange}
            />
            <S.ButtonSearch />
            {search !== "" ? (
              <S.CloseSearch
                src="/close.svg"
                alt="icone para limpar a barra de pesquisa"
                onClick={clearSearch}
              />
            ) : null}
          </S.Form>
          <S.Select value={numberGrid} onChange={handleSelectChange}>
            <S.Options value={1}>1 Coluna</S.Options>
            <S.Options value={2}>2 Colunas</S.Options>
            <S.Options value={3}>3 Colunas</S.Options>
            <S.Options value={4}>4 Colunas</S.Options>
          </S.Select>

          <S.Select value={pokemonLimit} onChange={pokemonLimitChange}>
            <S.Options value='20'>Limite: 20</S.Options>
            <S.Options value='30'>Limite: 30</S.Options>
            <S.Options value='40'>Limite: 40</S.Options>
            <S.Options value='50'>Limite: 50</S.Options>
          </S.Select>
        </S.Container>
      </S.Header>
      {search !== "" ? (
        <S.ContainerSearch>
          {search != "" &&
            filteredData &&
            filteredData.map((item) => {
              return (
                <S.Search key={item.name}>
                  <Pokemons url={item.url} />
                </S.Search>
              );
            })}
        </S.ContainerSearch>
      ) : null}
    </>
  );
};

export default Header;
