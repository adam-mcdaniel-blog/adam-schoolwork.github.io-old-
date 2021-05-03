import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const edges = [{
    name: "The GNU Project Debugger (GDB)",
    url: "https://www.gnu.org/software/gdb/",
    description: "Have a segfault in your code? You'll learn to use GDB to debug any software you write in industry. Not only will you be able to see where your program went wrong after completion, you'll be able to see through your bugs in real time!",
  },
  {
    name: "The Stack, Heap, and Pointers",
    url: "",
    description: "Are you having difficulty understanding how to use pointers effectively? Do you often find yourself smashing the stack, or leaking on the heap? Learn how to use references, pointers, and registers the right way, and how to avoid bad stack and heap practices.",
  },
  {
    name: "Valgrind",
    url: "https://valgrind.org/",
    description: "Does your code sometimes crash for seemingly no reason? We'll teach you how to use Valgrind, the industry standard for detecting and locating memory leaks. Don't ever count your mallocs and frees by hand again!",
  },
  ];
  return (
    <Wrapper as={Container} id="projects">
      <h1>What do we offer?</h1>
      <Grid>
        {edges.map((node) => (
          <Item key={node.name} as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
