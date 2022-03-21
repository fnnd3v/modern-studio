import React from "react";
import styled from "styled-components";

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

const Wrapper = styled.div`
  width: 100%;
  padding: 30px;

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: column;
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  h3 {
    font-family: ${({ theme }) => theme.font.family.cormorant};
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    margin-bottom: 30px;
    font-weight: 400;
  }

  span {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -60px;
      background-color: ${({ theme }) => theme.color.beige};
      width: calc(100% + 65px);
      height: 100%;
      z-index: -90;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
    margin: 0 auto;
    margin-bottom: 50px;

    div {
      padding: 30px;
      flex-basis: 40%;
    }

    p {
      padding-top: 25px;
    }
  }
`;

const LinkP = styled.p`
  margin-bottom: 20px;
  margin-bottom: 20px;

  a {
    border-bottom: 1px solid ${({ theme }) => theme.color.black};
    text-decoration: none;
    color: ${({ theme }) => theme.color.black};
  }

  ${({ theme }) => theme.mq.desktop} {
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    margin-bottom: 30px;
  }
`;

const ArticleWrapper = styled.div`
  padding: 10px 0;
  margin-bottom: 20px;

  h4 {
    margin-bottom: 10px;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin: 20px 40px;
  }
`;

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
