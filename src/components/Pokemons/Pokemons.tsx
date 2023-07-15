import { useEffect, useState } from "react";

import axios, { toFormData } from "axios";

// Props
import { PokemonProps } from "../../interface/interface";

// Style
import * as S from './styles'

const Pokemons = ({ url }: { url: string }) => {
  const [data, setData] = useState<PokemonProps[] | null>(null);

  const get = async () => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      setData([response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get();
  }, []);

  if (data === null) return <p>Carregando...</p>;
  return (
    <>
      {data.map((res) => (
        <S.Container>
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
