import Navigation from "components/navigation/navigation";
import React from "react";

const MainTemplate = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default MainTemplate;
