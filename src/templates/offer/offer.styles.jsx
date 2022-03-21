import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 30px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-weight: 400;
    font-family: ${({ theme }) => theme.font.family.cormorant};
    font-size: ${({ theme }) => theme.font.size.headingSmall};
  }
`;
export const ButtonsWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  button {
    margin: 10px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.color.black};
    padding: 8px 25px;
    cursor: pointer;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.black};
  }

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;

    button {
      margin: 20px 40px;
    }
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 90%;

  img {
    width: 100%;
    margin: 10px 0;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: 80%;
    margin: 0 auto;
    position: relative;

    img {
      height: 90%;
      padding: 10px;
      margin: 0;
    }
  }
`;
