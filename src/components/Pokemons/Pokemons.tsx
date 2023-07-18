import { useEffect, useState } from "react";

import axios from "axios";

// Props
import { PokemonProps } from "../../interface/interface";

// Style
import * as S from "./styles";

// Rotas
import { useNavigate } from "react-router-dom";

const Pokemons = ({ url }: { url: string }) => {
  const [data, setData] = useState<PokemonProps[] | null>(null);

  // Função para mudar a rota
  const navigate = useNavigate();

  const get = async () => {
    try {
      const response = await axios.get(url);
      setData([response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (id: number, name: string): void => {
    navigate(`/pokemon/${name}`);
    window.localStorage.setItem("Pokemon", String(id)); // Coloca o id do Pokémon no localStorage
  };

  useEffect(() => {
    get();
  }, []);

  if (data === null) return <p>Carregando...</p>;
  return (
    <>
      {data.map((res) => (
        <S.Container key={res.id} onClick={() => handleClick(res.id, res.name)}>
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
