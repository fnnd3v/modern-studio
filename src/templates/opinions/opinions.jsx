import React from "react";

import styled from "styled-components";

const OpinionsData = [
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

const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column-reverse;

  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const HeaderWrapper = styled.div`
  margin-bottom: 30px;

  h3 {
    font-family: ${({ theme }) => theme.font.family.cormorant};
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    margin-bottom: 30px;
    font-weight: 400;
    position: relative;

    span {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -60px;
        background-color: ${({ theme }) => theme.color.beige};
        width: calc(100% + 65px);
        height: 120%;
        z-index: -90;
      }
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 90px;
    margin: auto 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.desktop} {
    padding: 50px;
  }
`;

const OpinionWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.color.beige};
  margin-bottom: 40px;
  padding: 30px;

  p {
    margin-bottom: 20px;
  }
`;

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
