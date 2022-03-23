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

  &::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    top: 0;
    right: 0;
    margin: -20px;
    background-color: ${({ theme }) => theme.color.black};
    clip-path: polygon(0 0, 100% 0, 100% 100%, 90% 100%, 90% 10%, 0 10%);
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
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  width: 90%;
  margin-top: 10px;
  height: 30%;

  &::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 0;
    margin: -20px;
    background-color: ${({ theme }) => theme.color.beige};
    clip-path: polygon(10% 0, 10% 90%, 100% 90%, 100% 100%, 0 100%, 0 0);
  }

  ${({ theme }) => theme.mq.desktop} {
    position: absolute;
    width: 60%;
    height: 70%;
    left: 20%;
    top: 50%;
    transform: translateY(-50%);
  }
`;
