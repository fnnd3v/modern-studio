import React from "react";
import styled from "styled-components";

import PhoneIcon from "assets/icons/phone.svg";
import {
  ContentWrapper,
  FormWrapper,
  ImageWrapper,
  Wrapper,
} from "./contact.styles";

const Contact = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <h4>
          <span>Kontakt</span>
        </h4>
        <p>
          Szukasz nieruchomości dla siebie? A może potrzebujesz fachowej pomocy
          przy sprzedaży własnej nieruchomości? Chętnie odpowiemy na Twoje
          pytania. Napisz lub zadzwoń.
        </p>
        <div>
          <img src={PhoneIcon} />
          <p>telefon: 548 475 145</p>
        </div>
        <FormWrapper>
          <input placeholder="adres e-mail" />
          <textarea placeholder="wiadomość" />
          <button>WYŚLIJ</button>
        </FormWrapper>
      </ContentWrapper>
      <ImageWrapper />
    </Wrapper>
  );
};

export default Contact;
