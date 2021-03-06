import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  position: relative;
  margin-top: 40px;

  ${({ theme }) => theme.mq.desktop} {
    width: 70%;
    margin: 60px auto 10px;
  }
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const SocialIcons = styled.div`
  display: flex;

  img {
    height: 30px;
    margin: 0 10px;
    cursor: pointer;
  }

  ${({ theme }) => theme.mq.desktop} {
    position: absolute;
    bottom: 20px;
    height: 40px;
    margin: 0 20px;
    right: 20px;
  }
`;
export const LinksWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const StyledNavLink = styled(NavLink)`
  margin: 7px;
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;
  cursor: pointer;
`;
