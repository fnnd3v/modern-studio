import React from "react";

import styled from "styled-components";

import RealizationImage1 from "assets/images/8_realization.jpg";
import RealizationImage2 from "assets/images/9_realization.jpg";
import RealizationImage3 from "assets/images/10_realization.jpg";
import RealizationImage4 from "assets/images/11_realization.jpg";
import RealizationImage5 from "assets/images/12_realization.jpg";

const realizationsData = [
  {
    title: "Poznaj nasze realizacje",
    content:
      "Każda współpraca to dla nas wspaniała przygoda, a to co po niej pozostaje, to pełna satysfakcja naszych klientów. Sprawdź, co udało nam się do tej pory osiągnąć. ",
    img: RealizationImage1,
    id: 1,
  },
  {
    title: "Bóżnicza 1",
    content:
      "Tej ulicy nie trzeba nikomu przedstawiać. Doskonała lokalizacja w samym centrum Poznania – nawet ekstremalnie krzywy bruk położony na Bóżniczej nie pokrzyżował nam planów i mieszkanie sprzedało się praktycznie na pniu.",
    img: RealizationImage2,
    id: 2,
  },
  {
    title: "Jeleniogórska 54",
    content:
      "Tu jeszcze jedno mieszkanko, które było takim sztosem, że aż zrobiliśmy duże zdjęcie na środku. A tak serio to po prostu chciałem pokazać, że nie wszystkie zdjęcia muszą być po bokach.",
    img: RealizationImage3,
    id: 3,
  },
  {
    title: "Rolna 48",
    content:
      "Przepiękne mieszkanie z tarasem na dachu położone w doskonałej lokalizacji. Właścicielom zależało na x i y więc podeszliśmy do tego w taki sposób, że na końcu był po prostu sztosik.",
    img: RealizationImage4,
    id: 4,
  },
  {
    title: "ul. Staszica",
    content:
      "Transakcja wynajmu mieszkania, przy której na naszych oczach zrodziła się piękna przyjaźń między Wynajmującą - Panią Katarzyną, a Najemczynią - Panią Gosią",
    img: RealizationImage5,
    id: 5,
  },
];

const Wrapper = styled.div`
  width: 100%;
  padding: 120px 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ${({ theme }) => theme.mq.desktop} {
    width: 90%;
    margin: 0 auto;
  }
`;

const ItemWrapper = styled.div`
  margin: 50px auto;

  h4 {
    font-family: ${({ theme }) => theme.font.family.cormorant};
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    margin-bottom: 30px;
    font-weight: 400;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: -5%;
      left: -60px;
      background-color: ${({ theme }) => theme.color.beige};
      width: calc(80% + 65px);
      height: 60px;
      z-index: -90;
    }
  }

  img {
    margin-top: 20px;
    width: 90%;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: ${({ id }) => {
      if (id % 2 === 0) {
        return "row-reverse";
      } else {
        return "row";
      }
    }};

    div {
      padding: 30px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    img {
      width: 50%;
    }
  }
`;

const Realizations = () => {
  return (
    <Wrapper>
      {realizationsData.map((item) => {
        return (
          <ItemWrapper id={item.id} key={item.id}>
            <div>
              <h4> {item.title} </h4>
              <p> {item.content} </p>
            </div>
            <img src={item.img} />
          </ItemWrapper>
        );
      })}
    </Wrapper>
  );
};

export default Realizations;
