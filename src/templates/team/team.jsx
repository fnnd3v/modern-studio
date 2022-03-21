import React from "react";

import TeamImage2 from "assets/images/7_team.jpg";
import { HeaderWrapper, ImageWrapper, LinkP, Wrapper } from "./team.styles";

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
        <img src={TeamImage2} alt="team pictures" />
      </ImageWrapper>
    </Wrapper>
  );
};

export default Team;
