import React from "react";
import {
  ArticleWrapper,
  ContentBox,
  HeaderWrapper,
  Wrapper,
} from "./why-us.styles";

const whyUsData = [
  {
    title: "Kompleksowa obsługa",
    content:
      "Kupujesz, sprzedajesz lub chcesz wynająć nieruchomość? Zajmiemy się Twoją sprawą od A do Z, aby zaoszczędzić Twój czas.",
  },
  {
    title: "Agent na wyłączność",
    content:
      "W powierzane nam zlecenia angażujemy się w 100% – dzięki nam zaoszczędzisz maksimum czasu, zachowująć przy tym pełną kontrolę.",
  },
  {
    title: "Zgrany zespół",
    content:
      "Doskonale rozumiemy Twoje potrzeby. Jesteśmy zespołem o zróżnicowanych kompetencjach, dzięki którym świetnie się uzupełniamy",
  },
];

const WhyUs = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <h3>Dlaczego szukasz</h3>
        <h3>
          <span> właśnie nas?</span>
        </h3>
      </HeaderWrapper>
      <ContentBox>
        {whyUsData.map((article) => {
          return (
            <ArticleWrapper key={article.title}>
              <h4> {article.title} </h4>
              <p> {article.content} </p>
            </ArticleWrapper>
          );
        })}
      </ContentBox>
    </Wrapper>
  );
};

export default WhyUs;
