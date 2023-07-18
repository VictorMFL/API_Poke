import { ChangeEvent, createContext, useContext, useState } from "react";

type GridContextProps = {
  numberGrid: string;
  handleSelectChange: ({ target }: ChangeEvent<HTMLSelectElement>) => void;
};

const DataGridPokemons = createContext({} as GridContextProps);

export const GridPokemonsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [numberGrid, setNumberGrid] = useState<string>("4");

  const handleSelectChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    setNumberGrid(target.value);
  };

  return (
    <DataGridPokemons.Provider value={{ numberGrid, handleSelectChange }}>
      {children}
    </DataGridPokemons.Provider>
  );
};

export const useGridPokemons = () => useContext(DataGridPokemons);
