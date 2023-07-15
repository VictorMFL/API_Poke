import { ChangeEvent, createContext, useContext, useState } from "react";

type GridContextProps = {
  numberGrid: string;
  handleChange: ({ target }: ChangeEvent<HTMLSelectElement>) => void;
};

const DataGridPokemons = createContext({} as GridContextProps);

export const GridPokemonsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [numberGrid, setNumberGrid] = useState<string>("4");

  const handleChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    setNumberGrid(target.value);
  };

  return (
    <DataGridPokemons.Provider value={{ numberGrid, handleChange }}>
      {children}
    </DataGridPokemons.Provider>
  );
};

export const useGridPokemons = () => useContext(DataGridPokemons);
