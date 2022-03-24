import React from "react";

import {
  ContentWrapper,
  Header,
  ServiceWrapper,
  Wrapper,
} from "./services.styles";

const servicesData = [
  {
    title: "Pośrednictwo w obrocie nieruchomościami",
    content:
      "Profesjonalne i kompleksowe usługi pośrednictwa w sprzedaży, zakupie, wynajmie lub najmie nieruchomości.",
  },
  {
    title: "Kompleksowe doradztwo",
    content:
      "Współpracujemy z najlepszymi kancelariami prawnymi i notarialnymi, zapewniamy fachowe doradztwo w zakresie kredytowania i ubezpieczeń.",
  },
  {
    title: "Home staging",
    content:
      "Profesjonalne przygotowanie nieruchomości niewielkim nakładem środków do szybkiej transakcji. Modna i funkcjonalna metamorfoza wnętrza mieszkania, domu czy biura. ",
  },
  {
    title: "Współpraca z deweloperem",
    content:
      "Pośrednictwo w zakresie sprzedaży inwestycji deweloperskiej (pełen zakres, znajomość lokalnych inwestycji/pewność wysokiej jakości wykonania) ",
  },
  {
    title: "Współpraca z inwestorem",
    content:
      "Kompleksowa obsługa klienta poszukującego nieruchomości w celach inwestycyjnych (lokata kapitału, analiza rynku).",
  },
  {
    title: "Współpraca z architektem",
    content:
      "Współpraca z zaprzyjaźnionym biurem architektonicznym w zakresie projektowania wnętrz (zarówno prywatnych jak i komercyjnych) i kompleksowej usługi wykończenie pod klucz.",
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
              <div></div>
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
