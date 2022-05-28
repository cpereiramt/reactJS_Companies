import "./App.css";
import { useState } from "react";
import Routes from "./utils/routes";
import GlobalStyle from "./styles/globalstyle";
import { lightTheme, darkTheme } from "./styles/theme";
import ButtonSetTheme from "./components/buttonSetTheme";
import { WrapperDiv } from "./app.style";
import { ThemeProvider } from "styled-components";
function App() {
  const [theme, setTheme] = useState(lightTheme);
  return (
    <ThemeProvider theme={theme === darkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <WrapperDiv>
        <ButtonSetTheme setThemeFunction={setTheme} theme={theme} />
        <Routes />
      </WrapperDiv>
    </ThemeProvider>
  );
}

export default App;
