import React from "react";

import {
  HeaderWrapper,
  LinksWrapper,
  SocialIcons,
  StyledNavLink,
  Wrapper,
} from "./footer.styles";

import FacebookIcon from "assets/icons/facebook.png";
import InstagramIcon from "assets/icons/instagram.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <h4>Modern Studio</h4>
        <SocialIcons>
          <img src={FacebookIcon} alt="facebook icon" />
          <img src={InstagramIcon} alt="instagram icon" />
        </SocialIcons>
      </HeaderWrapper>
      <LinksWrapper>
        <StyledNavLink to="/oferty/mieszkania">Oferta</StyledNavLink>
        <StyledNavLink to="/realizacja">Realizacje</StyledNavLink>
        <StyledNavLink to="/zespol">Zespół</StyledNavLink>
        <StyledNavLink to="/uslugi">Usługi</StyledNavLink>
        <StyledNavLink to="/kontakt">Kontakt</StyledNavLink>
      </LinksWrapper>
    </Wrapper>
  );
};

export default Footer;
