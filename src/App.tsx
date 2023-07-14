import { useEffect } from "react";

import { useDataContext } from "./context/data/useData";

const App = () => {
  const { data, getApi, nextPage, previousPage } = useDataContext();

  useEffect(() => {
    getApi();
  }, []);
  console.log(data);

  if (data === null) return <p>Carrengando...</p>;
  return (
    <div>
      <h1 onClick={previousPage}>Pokes</h1>
      {data.map((res) => res.results.map((poke) => <p key={poke.name}>{poke.name}</p>))}
    </div>
  );
};

export default App;
