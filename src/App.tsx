import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/theme/global";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "./Routers";
import { CartContextProvider } from "./contexts/CartContext"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <CartContextProvider>
            <Routers />
          </CartContextProvider>          
        </BrowserRouter>
    </ThemeProvider>
  )
}
