import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import { GlobalStyle } from "assets/styles/GlobalStyles";
import MainTemplate from "templates/main-template/main-template";
import MainPage from "pages/main-page/main-page";

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <MainPage />
      </MainTemplate>
    </ThemeProvider>
  );
};

export default Root;
