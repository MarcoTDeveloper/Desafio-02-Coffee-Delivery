import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/theme/global";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "./Routers";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
    </ThemeProvider>
  )
}
