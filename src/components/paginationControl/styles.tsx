import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  height: 50px;
  padding: 1rem 4rem 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.poppins};

  @media (max-width: 700px) {
    padding: 1rem 2rem 0 2rem;
  }
  `;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  `

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
  `;

export const Title = styled.h2`
  font-weight: 700;
  color: ${(props) => props.theme.colors.grayscale.light};
  cursor: pointer;

  @media (max-width:600px) {
    font-size: 1.2rem;
  }
  @media (max-width:400px) {
    display: none;
  }
`