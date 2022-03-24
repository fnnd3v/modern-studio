import React from "react";

import {
  HeaderWrapper,
  LinksWrapper,
  SocialIcons,
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
        <NavLink to="/oferty/mieszkania">Oferta</NavLink>
        <NavLink to="/realizacja">Realizacje</NavLink>
        <NavLink to="/zespol">Zespół</NavLink>
        <NavLink to="/uslugi">Usługi</NavLink>
        <NavLink to="/kontakt">Kontakt</NavLink>
      </LinksWrapper>
    </Wrapper>
  );
};

export default Footer;
