import React, { useState } from "react";
import styled from "styled-components";

import FacebookIcon from "assets/icons/facebook.png";
import InstagramIcon from "assets/icons/instagram.png";
import LogoIcon from "assets/icons/image1.svg";

const OuterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Wrapper = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px;

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: row;
    height: 10vh;
    background-color: transparent;
  }
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const StyledNav = styled.nav`
  ul {
    list-style: none;
    text-align: center;
    font-family: ${({ theme }) => theme.font.family.cormorant};
    font-size: ${({ theme }) => theme.font.size.mobileNav};
    li {
      margin: 40px 0;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-left: auto;
    margin-right: 20px;
    ul {
      display: flex;

      li {
        margin: 0 20px;
        cursor: pointer;
      }
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  cursor: pointer;

  img {
    width: 45px;
    margin: 0 30px;
  }

  ${({ theme }) => theme.mq.desktop} {
    img {
      width: 30px;
      margin: 0 10px;
    }
  }
`;

const StyledBurger = styled.button`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.color.beige};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;

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
        <Logo src={LogoIcon} />
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
          <img src={FacebookIcon} />
          <img src={InstagramIcon} />
        </SocialIcons>
      </Wrapper>
    </OuterWrapper>
  );
};

export default Navigation;
