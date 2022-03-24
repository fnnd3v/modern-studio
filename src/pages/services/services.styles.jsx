import styled from "styled-components";

import ServicesImg from "assets/images/18_services.jpg";

export const Wrapper = styled.div`
  width: 100%;
  padding: 120px 30px 0;
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 10px 0;
  margin-bottom: 50px;

  h4 {
    font-family: ${({ theme }) => theme.font.family.cormorant};
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    font-weight: 300;
    margin-bottom: 10px;
    margin-bottom: 150px;
  }

  div {
    background-image: url("${ServicesImg}");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 80%;
    height: 80%;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -99;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 80%;
    height: 500px;
    margin: 0 auto 100px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.color.beige};

    h4 {
      width: 30%;
    }

    div {
      height: 100%;
      width: 60%;
      margin-bottom: 10px;
    }
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;

  h4 {
    font-family: ${({ theme }) => theme.font.family.cormorant};
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    font-weight: 300;
    margin-bottom: 30px;

    span {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -60px;
        background-color: ${({ theme }) => theme.color.beige};
        width: calc(100% + 65px);
        height: 100%;
        z-index: -90;
      }
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 90%;
    margin: 40px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px;

    h4 {
      flex-basis: 100%;
    }
  }
`;

export const ServiceWrapper = styled.div`
  margin: 30px auto;

  div {
    width: 50px;
    height: 50px;
    background-color: antiquewhite;
    margin-bottom: 10px;
  }

  h5 {
    font-size: 16px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 30%;
    margin: 50px auto;
    padding: 10px;
  }
`;
