import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.fonts?.poppins};
  color: ${(props) => props.theme.colors?.grayscale.dark};
`
