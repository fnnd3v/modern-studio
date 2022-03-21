import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 30px;

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: column;
  }
`;
export const Header = styled.div`
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

export const LinkP = styled.p`
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

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    margin-bottom: 30px;
  }
`;

export const ArticleWrapper = styled.div`
  padding: 10px 0;
  margin-bottom: 20px;

  h4 {
    margin-bottom: 10px;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin: 20px 40px;
  }
`;
