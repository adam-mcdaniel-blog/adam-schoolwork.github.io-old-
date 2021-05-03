import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/static_web.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

const choose = (choices) => {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
};


export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="intro">
      <Header/>
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Learning to code?</h1>
          <h4>Subscribe to our free newsletter and finally get the coding education you deserve!</h4>
          <Button as={AnchorLink} href="#contact">{
            choose([
              "Subscribe",
              "Sign me up!",
              "Tell me more!",
              "Yes, this is exactly what I need!"
            ])
          }</Button>
        </Details>
        <Thumbnail>
          <img src={dev}/>
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
