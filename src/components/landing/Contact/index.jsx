import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/subscriber.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h2>To subscribe, simply let us know how to reach you!</h2>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="To subscribe, simply tell us how to reach you!"/>
    </Thumbnail>
  </Wrapper>
);
