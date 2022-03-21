import React from "react";

import WelcomeImage from "assets/images/1_welcome.jpg";
import { ImageBox, TextWrapper, Wrapper } from "./welcome.styles";

const Welcome = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <h3>Obsługę nieruchomości wymyśliliśmy na nowo</h3>
        <p>
          Modern Studio to nowoczesne biuro nieruchomości z profesjonalnym i
          innowacyjnym podejściem do tematu nieruchomości i inwestycji.
        </p>
        <p>
          Klienci wybierają nas, ponieważ zakres naszych usług wykracza poza to,
          co jest w stanie zaoferować konkurencja.
        </p>
      </TextWrapper>
      <ImageBox>
        <img src={WelcomeImage} alt="welcome img" />
      </ImageBox>
    </Wrapper>
  );
};

export default Welcome;
