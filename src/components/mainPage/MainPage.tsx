import { useEffect } from "react";

// Context
import { useDataContext } from "../../context/data/useData";

// Mostra todos os pokémons 
import Pokemons from "../Pokemons/Pokemons";

// Style
import * as S from "./styles"

const MainPage = () => {
  const { data, getApi } = useDataContext();

  useEffect(() => {
    getApi();
  }, []);

  console.log(data);

  if (data === null) return <p>Carregando...</p>;
  return (
    <S.Container>
      {data.map((res) =>
        res.results.map((poke) => (
          <Pokemons key={poke.name} url={poke.url} />
        ))
      )}
    </S.Container>
  );
};

export default MainPage;
