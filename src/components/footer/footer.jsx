import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  position: relative;
  margin-top: 40px;

  ${({ theme }) => theme.mq.desktop} {
    width: 70%;
    margin: 60px auto 10px;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const SocialIcons = styled.div`
  display: flex;

  ${({ theme }) => theme.mq.desktop} {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
`;
const LinksWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  p {
    margin: 7px;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <h4>Modern Studio</h4>
        <SocialIcons>
          <p>face</p>
          <p>insta</p>
        </SocialIcons>
      </HeaderWrapper>
      <LinksWrapper>
        <p>Oferty</p>
        <p>Realizacje</p>
        <p>Zespół</p>
        <p>Usługi</p>
        <p>Kontakt</p>
      </LinksWrapper>
    </Wrapper>
  );
};

export default Footer;
