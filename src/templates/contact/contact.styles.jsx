import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;

  h3 {
    font-family: ${({ theme }) => theme.font.family.cormorant};
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    margin-bottom: 30px;
    font-weight: 400;

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
    width: 40%;
    margin: 0 auto;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  input {
    height: 40px;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.black};
  }

  textarea {
    height: 160px;
    border: 1px solid ${({ theme }) => theme.color.black};
    margin-top: 10px;
    padding: 10px;
  }

  button {
    margin: 30px auto 0;
    border: 1px solid ${({ theme }) => theme.color.black};
    background-color: transparent;
    padding: 7px 50px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
  }
`;
