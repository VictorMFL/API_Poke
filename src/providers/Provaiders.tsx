import { DataProvider } from "../context/data/useData";
import { GridPokemonsProvider } from "../context/gridPokemons/GridPokemons";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GridPokemonsProvider>
        <DataProvider>{children}</DataProvider>
      </GridPokemonsProvider>
    </>
  );
};
