import React from "react";

import { FormWrapper, Wrapper } from "./contact.styles";

const Contact = () => {
  return (
    <Wrapper>
      <h3>
        <span>Napisz</span> do nas
      </h3>
      <FormWrapper>
        <input placeholder="Adres e-mail" />
        <textarea placeholder="Wiadomość" />
        <button>wyślij</button>
      </FormWrapper>
    </Wrapper>
  );
};

export default Contact;
