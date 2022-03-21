import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column-reverse;

  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const HeaderWrapper = styled.div`
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

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.desktop} {
    padding: 50px;
  }
`;

export const OpinionWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.color.beige};
  margin-bottom: 40px;
  padding: 30px;

  p {
    margin-bottom: 20px;
  }
`;
