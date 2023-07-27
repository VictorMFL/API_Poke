import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 160px;
  min-height: 160px;
  background-color: ${(props) => props.theme.colors?.grayscale.white};
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  padding: 4px 8px 0 8px;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
  font-family: ${(props) => props.theme.fonts?.poppins};
  cursor: pointer;

  @media (max-width: 400px) {
    max-width: 140px;
  }
`;

export const Paragraph = styled.p`
  width: 100%;
  text-align: right;
  font-weight: 400;
  color: ${(props) => props.theme.colors?.grayscale.medium};
`;

export const Img = styled.img`
  width: auto;
  height: auto;
  z-index: 100;
`;

export const Name = styled.p`
  color: ${(props) => props.theme.colors?.grayscale.dark};
  font-weight: 400;
  font-size: 1.4rem;
  z-index: 100;
`;

export const Contrast = styled.span`
  position: absolute;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 40%;
  background-color: ${(props) => props.theme.colors?.grayscale.background};
  border-radius: 8px;
`;
