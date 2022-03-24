import styled from "styled-components";

import ContactImage from "assets/images/19_contact.jpg";

export const Wrapper = styled.div`
  width: 100%;
  padding: 120px 30px 0;

  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 230px 120px;
  }
`;

export const ContentWrapper = styled.div`
  h4 {
    font-family: ${({ theme }) => theme.font.family.cormorant};
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    font-weight: 300;
    margin-bottom: 20px;
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
      height: 120%;
      z-index: -90;
    }
  }

  div {
    display: flex;
    margin: 20px 0;

    img {
      margin-right: 10px;
      display: block;
    }

    p {
      span {
        background-color: transparent;
      }
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 60%;
    margin: 0 auto;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  width: 100%;

  input {
    height: 45px;
    padding: 5px 10px;
    max-width: 490px;
    margin-bottom: 10px;
  }

  textarea {
    height: 200px;
    padding: 10px 10px;
    margin-bottom: 10px;
    max-width: 490px;
  }

  button {
    width: 130px;
    height: 30px;
    margin: 0 auto;
    border: 1px solid ${({ theme }) => theme.color.beige};
    background-color: transparent;
  }
`;

export const ImageWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.desktop} {
    background-image: url(${ContactImage});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    display: block;
    max-height: 540px;
  }
`;
