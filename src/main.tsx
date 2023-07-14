import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Context
import { Providers } from "./providers/Provaiders";

// Config do Styled-components
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Providers>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Providers>
);
