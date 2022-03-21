import React from "react";

import {
  ContentWrapper,
  HeaderWrapper,
  OpinionWrapper,
  Wrapper,
} from "./opinion.styles";

export const OpinionsData = [
  {
    name: "Katarzyna",
    content:
      "Udało się znaleźć kupca na nasze mieszkanie w jedne dzień! Cały proces był przeprowadzony bardzo sprawnie, profesjonalnie i dla nas jako klientów bezboleśnie. Ania ma prawdziwy dar tłumaczenia zawiłości i dopinania detali.",
  },
  {
    name: "Kamila",
    content:
      "Współpraca na najwyższym poziomie. Jeśli zależy Wam na szybkiej, bezproblemowej  sprzedaży czy zakupie mieszkania/ domu to nie ma lepszego miejsca.",
  },
];

const Opinions = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        {OpinionsData.map((opinion) => {
          return (
            <OpinionWrapper key={opinion.content}>
              <p> {opinion.content} </p>
              <h4> {opinion.name} </h4>
            </OpinionWrapper>
          );
        })}
      </ContentWrapper>
      <HeaderWrapper>
        <h3>
          <span> Co mówią </span>o nas nasi klienci?
        </h3>
        <p>
          Bezkompromisowo wspieramy naszych klientów a ich satysfakcja jest dla
          nas najważniejszym celem.
        </p>
      </HeaderWrapper>
    </Wrapper>
  );
};

export default Opinions;
