import { useState, useEffect } from "react";

import axios from "axios";

// Props da API
import { DataProps } from "../interface/interface";

const url = "https://pokeapi.co/api/v2/pokemon?limit=1000";

const useAllPokemons = () => {
  const [AllPokemons, setAllPokemons] = useState<null | DataProps[]>(null);

  async function get() {
    try {
      const response = await axios.get(url);
      setAllPokemons([response.data]);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    get();
  }, []);

  return { AllPokemons };
};

export default useAllPokemons;
