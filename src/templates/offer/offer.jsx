import React from "react";

import {
  ButtonsWrapper,
  ContentWrapper,
  HeaderWrapper,
  Wrapper,
} from "./offer.styles";

import OfferImage1 from "assets/images/2_offer.jpg";
import OfferImage2 from "assets/images/3_offer.jpg";
import OfferImage3 from "assets/images/4_offer.jpg";
import OfferImage4 from "assets/images/5_offer.jpg";

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
        <img src={OfferImage1} alt="offer img1" />
        <img src={OfferImage2} alt="offer img2" />
        <img src={OfferImage3} alt="offer img3" />
        <img src={OfferImage4} alt="offer img4" />
      </ContentWrapper>
    </Wrapper>
  );
};

export default Offer;
