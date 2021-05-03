import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev}/>
        </Thumbnail>
        <Details theme={theme}>
          <h1>Already know how to code?</h1>
          <p>
            There's <b>always</b> more to learn. We'll give you helpful tips and tricks for writing
            elegant code, no matter your skill level. No more endless hours of debugging!
            
            hmmm
          </p>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
