import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px;
  margin-bottom: 40px;

  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
export const HeaderWrapper = styled.div`
  margin-bottom: 40px;

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
        top: -15%;
        left: -60px;
        background-color: ${({ theme }) => theme.color.beige};
        width: calc(100% + 65px);
        height: 150%;
        z-index: -90;
      }
    }
  }

  img {
    display: none;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;

    h3 {
      align-self: center;
    }

    img {
      display: block;
      width: 400px;
      align-self: flex-end;
      margin: 40px 80px;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 90%;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  &::after,
  &::before {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.color.black};
    margin: -20px;
    right: 0;
    bottom: 0;
  }

  &::after {
    width: 80px;
    height: 10px;
  }

  &::before {
    width: 10px;
    height: 80px;
  }

  img {
    width: 100%;
  }
`;

export const LinkP = styled.p`
  margin-bottom: 20px;

  a {
    border-bottom: 1px solid ${({ theme }) => theme.color.black};
    text-decoration: none;
    color: ${({ theme }) => theme.color.black};
  }
`;
