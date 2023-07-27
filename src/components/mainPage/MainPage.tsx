import { useEffect } from "react";

// Context
import { useDataContext } from "../../context/data/useData";
import { useGridPokemons } from "../../context/gridPokemons/GridPokemons";

// Mostra todos os pokémons
import Pokemons from "../Pokemons/Pokemons";

// Style
import * as S from "./styles";

// Config do styled-components para aceitar a propriedade passada
import { StyleSheetManager } from "styled-components";

// Tela de Carregamento
import LoadingMainPage from "../loading/mainPage/LoadingMainPage";

const MainPage = () => {
  const { data, getApi } = useDataContext();

  useEffect(() => {
    if (data === null) {
      getApi();
    }
  }, [data]);

  const { numberGrid } = useGridPokemons();

  if (data === null) return <LoadingMainPage />;
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "numbergrid"}>
      <S.Container numbergrid={numberGrid}>
        {data && data.map((res) =>
          res.results.map((poke) => <Pokemons key={poke.name} url={poke.url} />)
        )}
      </S.Container>
    </StyleSheetManager>
  );
};

export default MainPage;
