import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 120px 30px 0;

  ${({ theme }) => theme.mq.desktop} {
    padding: 100px 0 0;
  }
`;
export const Header = styled.div`
  height: 70vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
    url(${({ image }) => image});
  background-size: cover;
  background-position: left;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  text-align: center;
  color: ${({ theme }) => theme.color.beige};
  margin-bottom: 20vh;

  h4 {
    font-family: ${({ theme }) => theme.font.family.cormorant};
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 30px;
  }

  ${({ theme }) => theme.mq.desktop} {
    height: 90vh;
  }
`;
export const ContentWrapper = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    padding: 0 80px;
    display: flex;
    flex-direction: column;
  }
`;
export const PersonWrapper = styled.div`
  margin: 120px 0;
  height: 80vh;

  img {
    width: 100%;
    margin-bottom: 30px;
  }

  h4 {
    font-family: ${({ theme }) => theme.font.family.cormorant};
    font-weight: 300;
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: -5%;
      left: -60px;
      background-color: ${({ theme }) => theme.color.beige};
      width: calc(30% + 65px);
      height: 60px;
      z-index: -90;
    }
  }

  h5 {
    margin: 5px 0 15px;
    color: ${({ theme }) => theme.color.steel};
  }

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;

    img {
      width: 45%;
    }

    div {
      width: 45%;
    }
  }
`;
export const InfoBox = styled.div`
  margin-top: 30px;

  p {
    margin: 10px;
    text-decoration: underline;
    font-weight: 500;
  }
`;
