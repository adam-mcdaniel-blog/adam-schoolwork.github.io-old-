import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './social.json';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>CodeBetter Lessons</h2>
        <span>
          Made by Adam McDaniel, Joonyoung Im, Kyung Min Han, Neh Patel, Logan Del Tillman
        </span>
      </Details>
    </Flex>
  </Wrapper>
);
