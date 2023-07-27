import { useEffect, useState } from "react";

import axios from "axios";

// Props
import { PokemonProps } from "../../interface/interface";

// Style
import * as S from "./styles";

// Rotas
import { useNavigate } from "react-router-dom";

// Tela de carregamento
import LoadingPokemon from "../loading/pokemon/LoadingPokemon";

// Caso ocorra um erro na requisição
import DataError from "../dataError/DataError";

const Pokemons = ({ url }: { url: string }) => {
  const [data, setData] = useState<PokemonProps[] | null>(null);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  // Função para mudar a rota
  const navigate = useNavigate();

  const get = async () => {
    try {
      const response = await axios.get(url);
      setData([response.data]);
      setErrorMessage(null);
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error?.message);
    }
  };

  const handleClick = (id: number, name: string): void => {
    navigate(`/pokemon/${name}`);
    window.localStorage.setItem("Pokemon", String(id)); // Coloca o id do Pokémon no localStorage
  };

  useEffect(() => {
    get();
  }, []);

  if (errorMessage) return <DataError errorMessage={errorMessage} />;
  if (data === null) return <LoadingPokemon />;
  return (
    <>
      {data.map((res) => (
        <S.Container key={res.id} onClick={() => handleClick(res.id, res.name)} data-testid="container_pokemon">
          <S.Paragraph>#{res.id}</S.Paragraph>
          <S.Img src={res.sprites.front_default} />
          <S.Name>{res.name}</S.Name>
          <S.Contrast />
        </S.Container>
      ))}
    </>
  );
};

export default Pokemons;
