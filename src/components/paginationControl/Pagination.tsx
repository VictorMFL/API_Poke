import * as S from "./styles";

// Context
import { useDataContext } from "../../context/data/useData";

const PaginationControl = () => {
  const { nextPage, previousPage, data } = useDataContext();

  return (
    <S.Footer>
      <S.Container>
        {data !== null && data[0].previous === null ? null : (
          <>
            <S.Icon src="/previous_pokemon.svg" onClick={previousPage} />
            <S.Title onClick={previousPage}>Anterior</S.Title>
          </>
        )}
      </S.Container>
      <S.Container>
        {data !== null && data[0].next === null ? null : (
          <>
            <S.Title onClick={nextPage}>Próximo</S.Title>
            <S.Icon src="/next_pokemon.svg" onClick={nextPage} />
          </>
        )}
      </S.Container>
    </S.Footer>
  );
};

export default PaginationControl;
