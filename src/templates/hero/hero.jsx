import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import styled from "styled-components";

import { Wrapper } from "./hero.styles";

const Hero = () => {
  return (
    <Wrapper>
      <h1>Biuro nieruchomości, którego potrzebujesz</h1>
      <p>Sprawdź, co oznacza dla nas bezkonkurencyjność.</p>
    </Wrapper>
  );
};

export default Hero;
