import React from 'react';

import {
  Accordion,
  Container,
  Flex,
  Text,
  ThemeIcon,
  Title,
  Anchor,
} from '@mantine/core';

import { IconCircleCheck } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { sampleLessons } from '../../sampleLesson';

export const HomeChallenges = () => {
  return (
    <Container size='xs' px='xs' mt={32}>
      <Title order={1}>Teoria de colas</Title>

      <Text mt={16}>2 lecciones | 1h de duración estimada</Text>

      <Accordion
        variant='contained'
        defaultValue='customization'
        mt={8}
        radius='xs'
      >
        <Accordion.Item value='introduccion'>
          <Accordion.Control>Introducción</Accordion.Control>
          <Accordion.Panel>
            {sampleLessons[0].map(({ title, id }) => (
              <Flex p={4}>
                <ThemeIcon color='teal' size={24} radius='xl' mr={12}>
                  <IconCircleCheck size='1rem' />
                </ThemeIcon>
                <Flex justify='space-between' align='center' w='100%'>
                  <Anchor component={Link} to={`/lesson/0/${id}`}>
                    {title}
                  </Anchor>
                  <Text color='green'>20/20</Text>
                </Flex>
              </Flex>
            ))}
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value='modelos-linea-espera'>
          <Accordion.Control>Modelos de linea de espera</Accordion.Control>
          <Accordion.Panel>
            {sampleLessons[1].map(({ title, id }) => (
              <Flex p={4}>
                <ThemeIcon color='teal' size={24} radius='xl' mr={12}>
                  <IconCircleCheck size='1rem' />
                </ThemeIcon>
                <Flex justify='space-between' align='center' w='100%'>
                  <Anchor component={Link} to={`/lesson/1/${id}`}>
                    {title}
                  </Anchor>
                  <Text color='green'>20/20</Text>
                </Flex>
              </Flex>
            ))}
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};
