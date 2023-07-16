// Style
import * as S from "./styles";

// Icone
import NumberFour from "/number_four.svg";

import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };

  return (
    <S.Container>
      <S.Content>
        <S.Title>Ops, esta página não foi encontrada</S.Title>
        <S.Paragraph>
          Parece que você se perdeu... Tente voltar para a página anterior ou
          acessar a home.
        </S.Paragraph>

        <S.ContainerButton>
          <S.Button onClick={home}>voltar</S.Button>
          <S.Button onClick={home}>ir para a home</S.Button>
        </S.ContainerButton>
      </S.Content>

      <S.ContainerImg>
        <S.Img src={NumberFour} alt="Número quatro" />
        <S.Iframe src="https://lottie.host/?file=ab7a5c4d-d0de-4877-be5e-8cffedab2bf1/f7kJBYBWYz.json"></S.Iframe>
        <S.Img src={NumberFour} alt="Número quatro" />
      </S.ContainerImg>
    </S.Container>
  );
};

export default Page404;
