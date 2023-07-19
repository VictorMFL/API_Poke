import ReactDOM from "react-dom/client";
import "./index.css";

// Context
import { Providers } from "./providers/Provaiders";

// Config do react-router-dom
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Page404 from "./router/page404/Page404";

// Components
import App from "./App";
import IndividualPokemon from "./components/Pokemons/IndividualPokemon/IndividualPokemon";

const router = createBrowserRouter([
  {
    path: "/API_Poke",
    element: <App />,
    errorElement: <Page404 />
  },
  {
    path: "/pokemon/:id",
    element: <IndividualPokemon />
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Providers>
    <RouterProvider router={router} />
  </Providers>
);
