import { DataProvider } from "../context/data/useData";
import { GridPokemonsProvider } from "../context/gridPokemons/GridPokemons";

// Config do Styled-components
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

export const Providers = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GridPokemonsProvider>
          <DataProvider>{children}</DataProvider>
        </GridPokemonsProvider>
      </ThemeProvider>
    </>
  );
};
