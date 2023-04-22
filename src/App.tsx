import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { RouterApp } from './routes/RouterApp'

export const App = () => {

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <RouterApp />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
