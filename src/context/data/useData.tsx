import { createContext, useContext, useState, ChangeEvent, useEffect } from "react";

import axios from "axios";

// Props dos dados da API
import { DataProps } from "../../interface/interface";

// Caso ocorra um erro na requisição
import DataError from "../../components/dataError/DataError";

export type DataContextProps = {
  data?: DataProps[] | null;
  getApi: () => void;
  nextPage: () => Promise<void>;
  previousPage: () => Promise<void>;
  pokemonLimit: string;
  setPokemonLimit: React.Dispatch<React.SetStateAction<string>>
};

export const DataContext = createContext({} as DataContextProps);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<DataProps[] | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [pokemonLimit, setPokemonLimit] = useState<string>("20");

  let apiUrl = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${pokemonLimit}`;

  const getApi = async () => {
    try {
      const response = await axios.get(apiUrl);
      setData([response.data]);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const nextPage = async () => {
    const nextPage = data?.map((item) => item.next);
    if (nextPage === null) {
      null;
    } else {
      try {
        const response = await axios.get(String(nextPage));
        setData([response.data]);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
  };

  const previousPage = async () => {
    const previousPage = data?.map((item) => item.previous);
    if (previousPage === null) {
      null;
    } else {
      try {
        const response = await axios.get(String(previousPage));
        setData([response.data]);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
  };

  // Atualiza a requisição de acordo como a quantidade que o usuário definir
  useEffect(() => {
    getApi()
  }, [pokemonLimit])

  if (error) return <DataError />;
  return (
    <DataContext.Provider
      value={{
        data,
        getApi,
        nextPage,
        previousPage,
        pokemonLimit,
        setPokemonLimit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
