import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  width: 70px;
  height: 70px;
  border: 8px solid ${(props) => props.theme.colors.loading.gray200};
  border-top-color: ${(props) => props.theme.colors.loading.red};
  border-radius: 50%;
  animation: ${spinAnimation} 1s infinite linear;
`;
