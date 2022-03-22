import React, { useState } from "react";

import { Link } from "react-router-dom";

import {
  Logo,
  OuterWrapper,
  SocialIcons,
  StyledBurger,
  StyledLink,
  StyledNav,
  Wrapper,
} from "./navigation.styles";

import FacebookIcon from "assets/icons/facebook.png";
import InstagramIcon from "assets/icons/instagram.png";
import LogoIcon from "assets/icons/image1.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <OuterWrapper>
      <Logo src={LogoIcon} />
      <StyledBurger onClick={toggleNav}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Wrapper isOpen={isOpen}>
        <Logo src={LogoIcon} isOpen={isOpen} />
        <StyledNav>
          <ul>
            <StyledLink onClick={() => setIsOpen(false)} to="/strona-glowna">
              Strona główna
            </StyledLink>
            <StyledLink onClick={() => setIsOpen(false)} to="/oferty">
              Oferty
            </StyledLink>
            <StyledLink onClick={() => setIsOpen(false)} to="/realizacja">
              Realizacja
            </StyledLink>
            <StyledLink onClick={() => setIsOpen(false)} to="/team">
              Zespół
            </StyledLink>
            <StyledLink onClick={() => setIsOpen(false)} to="/uslugi">
              Usługi
            </StyledLink>
            <StyledLink onClick={() => setIsOpen(false)} to="/kontakt">
              Kontakt
            </StyledLink>
          </ul>
        </StyledNav>
        <SocialIcons>
          <img src={FacebookIcon} alt="facebook icon" />
          <img src={InstagramIcon} alt="instagram icon" />
        </SocialIcons>
      </Wrapper>
    </OuterWrapper>
  );
};

export default Navigation;
