import React from "react";

import {
  ContentWrapper,
  Header,
  ServiceWrapper,
  Wrapper,
} from "./services.styles";

import Icon1 from "assets/icons/icon1.svg";
import Icon2 from "assets/icons/icon2.svg";
import Icon3 from "assets/icons/icon3.svg";
import Icon4 from "assets/icons/icon4.svg";
import Icon5 from "assets/icons/icon5.svg";
import Icon6 from "assets/icons/icon6.svg";

const servicesData = [
  {
    title: "Pośrednictwo w obrocie nieruchomościami",
    content:
      "Profesjonalne i kompleksowe usługi pośrednictwa w sprzedaży, zakupie, wynajmie lub najmie nieruchomości.",
    icon: Icon1,
  },
  {
    title: "Kompleksowe doradztwo",
    content:
      "Współpracujemy z najlepszymi kancelariami prawnymi i notarialnymi, zapewniamy fachowe doradztwo w zakresie kredytowania i ubezpieczeń.",
    icon: Icon2,
  },
  {
    title: "Home staging",
    content:
      "Profesjonalne przygotowanie nieruchomości niewielkim nakładem środków do szybkiej transakcji. Modna i funkcjonalna metamorfoza wnętrza mieszkania, domu czy biura. ",
    icon: Icon3,
  },
  {
    title: "Współpraca z deweloperem",
    content:
      "Pośrednictwo w zakresie sprzedaży inwestycji deweloperskiej (pełen zakres, znajomość lokalnych inwestycji/pewność wysokiej jakości wykonania) ",
    icon: Icon4,
  },
  {
    title: "Współpraca z inwestorem",
    content:
      "Kompleksowa obsługa klienta poszukującego nieruchomości w celach inwestycyjnych (lokata kapitału, analiza rynku).",
    icon: Icon5,
  },
  {
    title: "Współpraca z architektem",
    content:
      "Współpraca z zaprzyjaźnionym biurem architektonicznym w zakresie projektowania wnętrz (zarówno prywatnych jak i komercyjnych) i kompleksowej usługi wykończenie pod klucz.",
    icon: Icon6,
  },
];

const Services = () => {
  return (
    <Wrapper>
      <Header>
        <h4>Obsługę nieruchomości wymyśliliśmy na nowo</h4>
        <div />
      </Header>
      <p>
        Poziom zaangażowania i zakres usług Modern Studio wykracza daleko poza
        to, co oferują inne biura nieruchomości – sprawdź, jak możemy Ci pomóc.
      </p>
      <ContentWrapper>
        <h4>
          <span>Jak może</span>my Ci pomóc?
        </h4>
        {servicesData.map((service) => {
          return (
            <ServiceWrapper key={service.title}>
              <div>
                <img src={service.icon} alt="icon" />
              </div>
              <h5> {service.title} </h5>
              <p> {service.content} </p>
            </ServiceWrapper>
          );
        })}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Services;
