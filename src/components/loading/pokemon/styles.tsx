import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

export const SkeletonPokemon = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 8px;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.loading.gray200},
    ${(props) => props.theme.colors.loading.gray100},
    ${(props) => props.theme.colors.loading.gray200}
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
`;
