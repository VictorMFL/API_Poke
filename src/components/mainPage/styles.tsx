import styled from "styled-components";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  numbergrid: string;
}

export const Container = styled.main<ContainerProps>`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.grayscale.white};
  display: grid;
  grid-template-columns: ${(props) =>
    props.numbergrid === "4"
      ? "1fr 1fr 1fr 1fr"
      : props.numbergrid === "3"
      ? "1fr 1fr 1fr"
      : props.numbergrid === "2"
      ? "1fr 1fr"
      : "1fr"};
  place-items: center;
  gap: 1rem;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.25) inset;
`;
