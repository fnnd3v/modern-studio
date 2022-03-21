import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import { GlobalStyle } from "assets/styles/GlobalStyles";
import MainTemplate from "templates/main-template/main-template";

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <p> chuj</p>
      </MainTemplate>
    </ThemeProvider>
  );
};

export default Root;
