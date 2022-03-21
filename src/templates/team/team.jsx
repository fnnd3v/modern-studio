import React from "react";
import styled from "styled-components";

import TeamImage1 from "assets/images/6_team.jpg";
import TeamImage2 from "assets/images/7_team.jpg";

const Wrapper = styled.div`
  padding: 30px;
  margin-bottom: 40px;

  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
const HeaderWrapper = styled.div`
  margin-bottom: 40px;

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

  img {
    display: none;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;

    h3 {
      align-self: center;
    }

    img {
      display: block;
      width: 400px;
      align-self: flex-end;
      margin: 40px 80px;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 90%;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  &::after,
  &::before {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.color.black};
    margin: -20px;
    right: 0;
    bottom: 0;
  }

  &::after {
    width: 80px;
    height: 10px;
  }

  &::before {
    width: 10px;
    height: 80px;
  }

  img {
    width: 100%;
  }
`;

const LinkP = styled.p`
  margin-bottom: 20px;

  a {
    border-bottom: 1px solid ${({ theme }) => theme.color.black};
    text-decoration: none;
    color: ${({ theme }) => theme.color.black};
  }
`;

const Team = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <h3>
          <span> Poznaj nasz</span> <br /> zespół
        </h3>
        <LinkP>
          <a href="/">Sprawdź, kim jesteśmy</a>
          ➡️
        </LinkP>
        <p>
          Dzięki doskonałej współpracy i przyjacielskiej atmosferze udało nam
          się stworzyć zespół dokosnały.
        </p>
      </HeaderWrapper>
      <ImageWrapper>
        <img src={TeamImage2} />
      </ImageWrapper>
    </Wrapper>
  );
};

export default Team;
