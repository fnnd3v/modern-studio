import React, { useState } from "react";

import {
  Logo,
  OuterWrapper,
  SocialIcons,
  StyledBurger,
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
            <li>Oferty</li>
            <li>Realizacje</li>
            <li>Zespół</li>
            <li>Usługi</li>
            <li>Kontakt</li>
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
