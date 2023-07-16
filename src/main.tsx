import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Context
import { Providers } from "./providers/Provaiders";

// Config do react-router-dom
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Page404 from "./router/page404/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />
  },
  {
    path: "/pokemon",
    element: <p>GD</p>
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Providers>
    <RouterProvider router={router} />
  </Providers>
);
