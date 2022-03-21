import React from "react";
import {
  ArticleWrapper,
  ContentWrapper,
  Header,
  LinkP,
  Wrapper,
} from "./about.styles";

const AboutData = [
  {
    title: "Pośrednictwo",
    content:
      "Profesjonalne i kompleksowe usługi pośrednictwa w sprzedaży, zakupie, wynajmie lub najmie nieruchomości",
  },
  {
    title: "Doradztwo",
    content:
      "Współpracujemy z najlepszymi kancelariami prawnymi i notarialnymi, zapewniamy fachowe doradztwo w zakresie kredytowania i ubezpieczeń. ",
  },
  {
    title: "Home staging",
    content:
      "Modna i funkcjonalna metamorfoza wnętrza mieszkania, domu czy biura podnosi atrakcyjność oferty na rynku.",
  },
  {
    title: "Współpraca z najlepszymi",
    content:
      "Poznański rynek znamy jak własną kieszeń – współpracując z nami wybierasz najlepszych deweloperów, prawników i architektów.",
  },
];

const About = () => {
  return (
    <Wrapper>
      <Header>
        <div>
          <h3>
            <span> Twój komfort </span>ponad wszystko
          </h3>
          <LinkP>
            <a href="/">Sprawdź pełen zakres naszych usług </a>
            ➡️
          </LinkP>
        </div>
        <p>
          To, co dla innych biur nieruchomości wykracza poza zakres usług, dla
          nas jest standardem. Wyróżnia nas bezkompromisowa troska o interes
          klienta.
        </p>
      </Header>
      <ContentWrapper>
        {AboutData.map((article) => {
          return (
            <ArticleWrapper key={article.title}>
              <h4> {article.title} </h4>
              <p> {article.content} </p>
            </ArticleWrapper>
          );
        })}
      </ContentWrapper>
    </Wrapper>
  );
};

export default About;
