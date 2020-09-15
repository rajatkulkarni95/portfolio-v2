import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { HeaderContainer } from "./containers/HeaderContainer";
import { Routes } from "./routes";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyle } from "./theme/globalStyle";

function App() {
  const [theme, setTheme] = useState("dark");

  const themeSwitcher = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Wrapper>
        <HeaderContainer />
        <Routes />
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 100%;
  margin: 20px auto;
  background: ${(p) => p.theme.colors.background};
`;

export default App;
