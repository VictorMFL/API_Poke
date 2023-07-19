import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 24px 12px;
  font-family: ${(props) => props.theme.fonts.poppins};
  @media (max-width:500px) {
    padding: 6px 6px 12px 6px;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
`;

export const IconPokeball = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width:500px) {
    display: none;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.grayscale.white};
  font-size: 1.5rem;
  font-weight: 700;

  @media (max-width:430px) {
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 250px;
  padding: 8px 16px 8px 35px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.colors.grayscale.white};
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.25) inset;
  border: none;
  outline: none;

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.grayscale.dark};
  }

  @media (max-width:600px) {
    width: 150px;
  }
  @media (max-width:400px) {
    width: 100px;
  }
`;

export const ButtonSearch = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-color: transparent;
  background-image: url(../../../public//search.svg);
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
`;

export const CloseSearch = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const SelectCol = styled.select`
  border-radius: 1rem;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.25) inset;
  padding: 0.5rem;
  border: none;
  outline: none;

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.grayscale.dark};
  }

  @media (max-width: 770px) {
    display: none;
  }
`;

export const SelectLimit = styled(SelectCol)`
  @media (max-width: 770px) {
    display: block;
  }`;

export const Options = styled.option``;

export const ContainerSearch = styled.div`
  position: absolute;
  right: 1rem;
  width: 400px;
  max-height: 400px;
  overflow-y: auto;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.grayscale.dark};
  display: grid;
  grid-template-columns: 1fr 1fr;
  z-index: 1000;
  gap: 1rem;
`;

export const Search = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PokemonLink = styled.a`
  color: #fff;
`
