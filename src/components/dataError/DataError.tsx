import * as S from "./styles";

const DataError = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <S.Container>
      <h2>{errorMessage}</h2>
    </S.Container>
  );
};

export default DataError;
