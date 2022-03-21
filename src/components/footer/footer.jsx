import React from "react";

import {
  HeaderWrapper,
  LinksWrapper,
  SocialIcons,
  Wrapper,
} from "./footer.styles";

import FacebookIcon from "assets/icons/facebook.png";
import InstagramIcon from "assets/icons/instagram.png";

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
        <p>Oferty</p>
        <p>Realizacje</p>
        <p>Zespół</p>
        <p>Usługi</p>
        <p>Kontakt</p>
      </LinksWrapper>
    </Wrapper>
  );
};

export default Footer;
