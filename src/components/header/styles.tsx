import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 24px 12px;
  font-family: ${(props) => props.theme.fonts.poppins};
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
`;

export const IconPokeball = styled.img`
  width: 40px;
  height: 40px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.grayscale.white};
  font-size: 1.5rem;
  font-weight: 700;
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
  background-image: url(../../../public/search.svg);
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
`;

export const Select = styled.select`
  border-radius: 1rem;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.25) inset;
  padding: 0.5rem;
  border: none;
  outline: none;

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.grayscale.dark};
  }
`;

export const Options = styled.option``;
