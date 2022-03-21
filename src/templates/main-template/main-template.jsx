import Navigation from "components/navigation/navigation";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  overflow: hidden;
  max-width: 100vw;
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
