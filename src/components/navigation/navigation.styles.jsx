import styled from "styled-components";

import { Link } from "react-router-dom";

export const OuterWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

export const Wrapper = styled.div`
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
  z-index: 9999;

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: row;
    height: 10vh;
    background-color: transparent;

    ${Logo} {
      display: none;
    }
  }
`;

export const StyledNav = styled.nav`
  ul {
    list-style: none;
    text-align: center;
    font-family: ${({ theme }) => theme.font.family.cormorant};
    font-size: ${({ theme }) => theme.font.size.mobileNav};
    color: ${({ theme }) => theme.color.black};
    display: flex;
    flex-direction: column;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-left: auto;
    margin-right: 20px;
    ul {
      color: ${({ theme }) => theme.color.beige};
      display: flex;
      flex-direction: row;
    }
  }
`;

export const SocialIcons = styled.div`
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

export const StyledBurger = styled.button`
  margin: 20px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 9999999999;

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

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;
  margin: 20px 0;

  ${({ theme }) => theme.mq.desktop} {
    margin: 0 20px;
  }
`;
