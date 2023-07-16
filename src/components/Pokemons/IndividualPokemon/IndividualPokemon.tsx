import { useEffect, useState } from "react";

import axios from "axios";

// Props
import { PokemonProps } from "../../../interface/interface";

// Style
import * as S from "./styles";

// Rotas
import { useNavigate } from "react-router-dom";

const IndividualPokemon = () => {
  const [data, setData] = useState<PokemonProps[] | null>(null);

  // Pega o id do pokemon no localStorage para fazer a chamada para a APi
  const url = window.localStorage.getItem("Pokemon");

  const navigate = useNavigate();

  const get = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${url}/`);
      console.log(response.data);
      setData([response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (id: number, name: string): void => {
    navigate(`/pokemon/${name}`);
    window.localStorage.setItem("Pokemon", String(id));
  };

  useEffect(() => {
    get();
  }, []);

  if (data === null) return <p>Carregando...</p>;
  return (
    <>
      {data.map((res) => (
        <S.Container key={res.id} onClick={() => handleClick(res.id, res.name)}>
          {res.name}
        </S.Container>
      ))}
    </>
  );
};

export default IndividualPokemon;
