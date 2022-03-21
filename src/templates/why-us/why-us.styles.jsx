import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  h3 {
    font-weight: 400;
  }

  ${({ theme }) => theme.mq.desktop} {
    justify-content: center;
    margin-bottom: 30px;

    h3 {
      margin: 0 auto 40px;
      font-weight: 400;
    }
  }
`;

export const HeaderWrapper = styled.div`
  font-family: ${({ theme }) => theme.font.family.cormorant};
  font-size: ${({ theme }) => theme.font.size.headingSmall};
  font-weight: 300;
  margin: 0 auto 60px;

  span {
    margin-left: 10px;
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
    display: flex;
  }
`;

export const ContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto 0;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    justify-content: center;
  }
`;

export const ArticleWrapper = styled.div`
  margin: 40px 0;

  h4 {
    margin-bottom: 10px;
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 10px;
    margin: 0 10px;
  }
`;
