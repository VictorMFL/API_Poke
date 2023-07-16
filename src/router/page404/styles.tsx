import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color:${(props) => props.theme.colors.grayscale.blueDark};
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  font-family: ${(props) => props.theme.fonts.outfit};

  @media(max-width: 900px) {
    grid-template-columns: 1fr;
  }
  @media(max-width: 500px) {
    padding: 1rem;
  }
`;

export const Content = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media(max-width: 900px) {
    grid-area: 2/1;
  }
`;

export const Title = styled.h1`
  line-height: 120%;
  font-size: 40px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.grayscale.light};
  margin-bottom: 24px;
`;

export const Paragraph = styled.p`
  font-weight: 300;
  line-height: 140%;
  font-size: 20px;
  color: ${(props) => props.theme.colors.grayscale.light};
  margin-bottom: 56px;
`;

export const ContainerButton = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button`
  padding: 12px 24px;
  background-color: ${(props) => props.theme.colors.grayscale.blue};
  border-radius: 999px;
  border-color: transparent;
  font-size: 14px;
  color: ${(props) => props.theme.colors.grayscale.background};
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.grayscale.blueLight};
  }
`;

export const ContainerImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Img = styled.img`
  @media(max-width: 500px) {
    max-width: 70px;
  }
`

export const Iframe = styled.iframe`
  border: none;
  width: 230px;
  height: 230px;
  @media(max-width: 500px) {
    max-width: 150px;
  }
`;
