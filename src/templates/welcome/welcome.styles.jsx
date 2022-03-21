import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.mq.desktop} {
    position: relative;
    flex-direction: row-reverse;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.beige};
  padding: 20px;
  position: relative;

  h3 {
    font-family: ${({ theme }) => theme.font.family.cormorant};
    font-weight: 300;
    font-size: ${({ theme }) => theme.font.size.headingMobile};
    margin-bottom: 30px;
  }

  :first-of-type p {
    margin-bottom: 20px;
  }

  &::after,
  &::before {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.color.black};
    margin: -20px;
    right: 0;
    top: 0;
  }

  &::after {
    width: 80px;
    height: 10px;
  }

  &::before {
    width: 10px;
    height: 80px;
  }

  ${({ theme }) => theme.mq.desktop} {
    position: absolute;
    width: 30%;
    z-index: 99;
    right: 10%;
    top: 70%;
    transform: translateY(-50%);
  }
`;

export const ImageBox = styled.div`
  position: relative;

  img {
    width: 90%;
    margin-top: 20px;
    align-self: flex-start;
  }

  &::after,
  &::before {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.color.beige};
    margin: -20px;
    bottom: 0;
    left: 0;
  }

  &::after {
    width: 80px;
    height: 10px;
  }

  &::before {
    width: 10px;
    height: 80px;
  }

  ${({ theme }) => theme.mq.desktop} {
    position: absolute;
    width: 60%;
    left: 20%;
    top: 50%;
    transform: translateY(-50%);
  }
`;
