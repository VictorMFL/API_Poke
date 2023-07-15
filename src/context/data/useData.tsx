import { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";

// Props dos dados da API
import { DataProps } from "../../interface/interface";

type DataContextProps = {
  data: DataProps[] | null;
  getApi: () => void;
  nextPage: () => Promise<void>;
  previousPage: () => Promise<void>;
};

const DataContext = createContext({} as DataContextProps);

const apiUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<DataProps[] | null>(null);

  const getApi = async () => {
    try {
      const response = await axios.get(apiUrl);
      setData([response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const nextPage = async () => {
    const nextPage = data?.map((item) => item.next);
    if (nextPage === null) {
      alert("null");
    } else {
      try {
        const response = await axios.get(String(nextPage));
        setData([response.data]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const previousPage = async () => {
    const previousPage = data?.map((item) => item.previous);
    try {
      const response = await axios.get(String(previousPage));
      setData([response.data]);
      console.log(previousPage);
    } catch (error) {
      console.log(error);
      if (error instanceof axios.AxiosError && error.config?.url === "") {
        alert("Acabou!");
      }
    }
  };

  return (
    <DataContext.Provider value={{ data, getApi, nextPage, previousPage }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
