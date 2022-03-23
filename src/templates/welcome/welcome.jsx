import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

import WelcomeImage from "assets/images/1_welcome.jpg";
import { ImageBox, TextWrapper, Wrapper } from "./welcome.styles";

gsap.registerPlugin(CSSRulePlugin);

const Welcome = () => {
  const tl = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const textAfter = CSSRulePlugin.getRule("#chuj:before");
  console.log(textAfter);

  useEffect(() => {
    const tl = gsap.timeline();
    console.log(textRef.current);
  }, []);

  return (
    <Wrapper>
      <TextWrapper id="chuj" ref={textRef}>
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
      <ImageBox ref={imageRef} image={WelcomeImage} />
    </Wrapper>
  );
};

export default Welcome;
