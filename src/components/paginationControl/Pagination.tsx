import * as S from "./styles";

// Icones
import PreviousPokemon from "../../../public/previous_pokemon.svg";
import NextPokemon from "../../../public/next_pokemon.svg";

// Context
import { useDataContext } from "../../context/data/useData";

const PaginationControl = () => {
  const { nextPage, previousPage, data } = useDataContext();

  if (!data || data.length === 0) return null;
  return (
    <S.Footer>
      <S.Container>
        {data[0].previous === null ? null : (
          <>
            <S.Icon src={PreviousPokemon} onClick={previousPage} />
            <S.Title onClick={previousPage}>Anterior</S.Title>
          </>
        )}
      </S.Container>
      <S.Container>
        {data[0].next === null ? null : (
          <>
            <S.Title onClick={nextPage}>Próximo</S.Title>
            <S.Icon src={NextPokemon} onClick={nextPage} />
          </>
        )}
      </S.Container>
    </S.Footer>
  );
};

export default PaginationControl;
