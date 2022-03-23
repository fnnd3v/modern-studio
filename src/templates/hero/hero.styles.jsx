import styled from "styled-components";

import HeroImage from "assets/images/4_offer.jpg";

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

  background: url(${HeroImage});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  color: ${({ theme }) => theme.color.black};

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
