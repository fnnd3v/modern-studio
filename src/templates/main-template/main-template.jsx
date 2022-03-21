import React from "react";

import Footer from "components/footer/footer";
import Navigation from "components/navigation/navigation";
import { Wrapper } from "./main-template.styles";

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default MainTemplate;
