import React from "react";
import styled from "styled-components";

import OfferImage1 from "assets/images/2_offer.jpg";
import OfferImage2 from "assets/images/3_offer.jpg";
import OfferImage3 from "assets/images/4_offer.jpg";
import OfferImage4 from "assets/images/5_offer.jpg";

const Wrapper = styled.div`
  width: 100%;
  padding: 30px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-weight: 400;
    font-family: ${({ theme }) => theme.font.family.cormorant};
    font-size: ${({ theme }) => theme.font.size.headingSmall};
  }
`;
const ButtonsWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  button {
    margin: 10px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.color.black};
    padding: 8px 25px;
    cursor: pointer;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.black};
  }

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;

    button {
      margin: 20px 40px;
    }
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 90%;

  img {
    width: 100%;
    margin: 10px 0;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: 80%;
    margin: 0 auto;
    position: relative;

    img {
      height: 90%;
      padding: 10px;
      margin: 0;
    }
  }
`;

const Offer = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <h3>Oferta</h3>
        <ButtonsWrapper>
          <button>bieżąca oferta</button>
          <button>nasze realizacje</button>
        </ButtonsWrapper>
      </HeaderWrapper>
      <ContentWrapper>
        <img src={OfferImage1} />
        <img src={OfferImage2} />
        <img src={OfferImage3} />
        <img src={OfferImage4} />
      </ContentWrapper>
    </Wrapper>
  );
};

export default Offer;
