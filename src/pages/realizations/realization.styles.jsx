import styled from "styled-components";

export const Wrapper = styled.div`
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

export const ItemWrapper = styled.div`
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
