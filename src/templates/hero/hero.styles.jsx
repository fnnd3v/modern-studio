import styled from "styled-components";

import HeroImage from "assets/images/0_hero.jpg";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  position: relative;
  z-index: -99999999999;

  background: url(${HeroImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  color: black;
  text-align: right;

  h1 {
    font-family: ${({ theme }) => theme.font.family.cormorant};
    font-weight: 300;
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    margin-bottom: 30px;
    font-weight: bold;
    text-shadow: ${({ theme }) => theme.font.shadow};
  }

  p {
    text-shadow: ${({ theme }) => theme.font.shadow};
    font-weight: bold;
  }

  ${({ theme }) => theme.mq.desktop} {
    h1 {
      font-size: ${({ theme }) => theme.font.size.heading};
    }
  }
`;
