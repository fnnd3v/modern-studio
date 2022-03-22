import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  padding: 110px 30px 10px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.black};
  h3 {
    font-family: ${({ theme }) => theme.font.family.cormorant};
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    margin-bottom: 30px;
    font-weight: 400;

    span {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: -15%;
        left: -60px;
        background-color: ${({ theme }) => theme.color.beige};
        width: calc(100% + 65px);
        height: 150%;
        z-index: -90;
      }
    }
  }
  div {
    margin: 50px auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 40%;
    margin: 0 auto;
    text-align: center;
  }
`;

export const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;
  padding: 10px;
`;

export const ContentWrapper = styled.div`
  width: 100%;

  ${({ theme }) => theme.mq.desktop} {
    width: 90%;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    position: relative;

    &::after,
    &::before {
      content: "";
      position: absolute;
      background-color: ${({ theme }) => theme.color.black};
      margin: -25px;
      top: 0;
      left: 0;
    }

    &::after {
      width: 120px;
      height: 18px;
    }

    &::before {
      width: 18px;
      height: 120px;
    }
  }
`;

export const OfferItem = styled.div`
  cursor: pointer;
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  margin: 10px auto;
  /* color: ${({ theme }) => theme.color.beige}; */
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 30px;
  flex-direction: column;

  h4 {
    margin-top: 15px;
  }

  ${({ theme }) => theme.mq.desktop} {
    flex: 1 0 21%;
    margin: 10px;
  }
`;

export const EmptyItems = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${({ theme }) => theme.font.size.headingMobile};
    color: ${({ theme }) => theme.color.black};
  }
`;
