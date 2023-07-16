// icone da Pokebola
import Poke from "/pokebola.svg";
import { useGridPokemons } from "../../context/gridPokemons/GridPokemons";

// Style
import * as S from "./styles";

const Header = () => {
  const { numberGrid, handleChange } = useGridPokemons();

  return (
    <S.Header>
      <S.Container>
        <S.IconPokeball src={Poke} alt="Icone de uma Pokébola" />
        <S.Title>Poke API</S.Title>
      </S.Container>
      <S.Container>
        <S.Form>
          <S.Input type="text" placeholder="Pesquisar" required />
          <S.ButtonSearch />
        </S.Form>
        <S.Select value={numberGrid} onChange={handleChange}>
          <S.Options value={1}>1 Coluna</S.Options>
          <S.Options value={2}>2 Colunas</S.Options>
          <S.Options value={3}>3 Colunas</S.Options>
          <S.Options value={4}>4 Colunas</S.Options>
        </S.Select>
      </S.Container>
    </S.Header>
  );
};

export default Header;
