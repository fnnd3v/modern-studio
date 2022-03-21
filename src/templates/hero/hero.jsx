import React from "react";

import HeroImage from "assets/images/0_hero.jpg";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;

  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
    url(${HeroImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  color: ${({ theme }) => theme.color.beige};

  h1 {
    font-family: ${({ theme }) => theme.font.family.cormorant};
    font-weight: 300;
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    margin-bottom: 30px;
  }

  ${({ theme }) => theme.mq.desktop} {
    h1 {
      font-size: ${({ theme }) => theme.font.size.heading};
    }
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <h1>Biuro nieruchomości, którego potrzebujesz</h1>
      <p>Sprawdź, co oznacza dla nas bezkonkurencyjność.</p>
    </Wrapper>
  );
};

export default Hero;
