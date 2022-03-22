import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import { GlobalStyle } from "assets/styles/GlobalStyles";
import MainTemplate from "templates/main-template/main-template";
import MainPage from "pages/main-page/main-page";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import OfferPage from "pages/offer-page/offer-page";
import Realizations from "pages/realizations/realizations";

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Routes>
            <Route path="*" element={<Navigate to="/strona-glowna" />} />
            <Route path="/strona-glowna" element={<MainPage />} />
            <Route path="/oferty" element={<OfferPage />}>
              <Route path=":type" />
            </Route>
            <Route path="/realizacja" element={<Realizations />} />
          </Routes>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
