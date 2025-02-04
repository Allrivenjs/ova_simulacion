import React from 'react';

import {
  Accordion,
  Container,
  Flex,
  Text,
  ThemeIcon,
  Title,
  Anchor,
  Avatar,
  Box,
} from '@mantine/core';

import { IconCircleCheck } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { sampleLessons } from '../../sampleLesson';

export const HomeChallenges = () => {
  return (
    <Box pt={20} pb={128}>
      <Container py={18}>
        <Flex align='center'>
          <Avatar size='lg'>RS</Avatar>
          <Text ml={6}>{localStorage.getItem('points') || 0} puntos</Text>
        </Flex>
      </Container>
      <Container size='xs' px='xs' mt={32}>
        <Title order={3}>
          OVA - Proyecto final para la manteria de Simulación
        </Title>

        <hr />
        <Title order={4}>Presentado por:</Title>

        <Text mt={8}>Fabián Alberto Sánchez Ruiz</Text>
        <Text mt={8}>Sebastián Ricardo Cardenas</Text>
        <Text mt={8}>Jaime Andres Ruiz Melendres</Text>
        <Text mt={8}>Roosevelt Santos Vanegas</Text>
        <Text mt={8}>Jose Daniel Muñoz Gomez</Text>

        <hr />

        <Title order={4}>Presentado a:</Title>

        <Text mt={8}>EDISON ALBERTO SUAREZ DOMINGUEZ</Text>

        <hr />

        <Title order={1} mt={28}>
          Teoria de colas
        </Title>
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
                <Flex p={4} key={`${title}-${id}`}>
                  <ThemeIcon color='teal' size={24} radius='xl' mr={12}>
                    <IconCircleCheck size='1rem' />
                  </ThemeIcon>
                  <Flex justify='space-between' align='center' w='100%'>
                    <Anchor component={Link} to={`/lesson/${0}/${id}`}>
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
                <Flex p={4} key={`${title}-${id}`}>
                  <ThemeIcon color='teal' size={24} radius='xl' mr={12}>
                    <IconCircleCheck size='1rem' />
                  </ThemeIcon>
                  <Flex justify='space-between' align='center' w='100%'>
                    <Anchor component={Link} to={`/lesson/${1}/${id}`}>
                      {title}
                    </Anchor>
                    <Text color='green'>20/20</Text>
                  </Flex>
                </Flex>
              ))}
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>

        <Title order={1} mt={32}>
          Simulación
        </Title>

        <Text mt={16}>3 lecciones | 1h de duración estimada</Text>

        <Accordion
          variant='contained'
          defaultValue='customization'
          mt={8}
          radius='xs'
        >
          <Accordion.Item value='fundamentos-simulacion'>
            <Accordion.Control>Introducción</Accordion.Control>
            <Accordion.Panel>
              {sampleLessons[2].map(({ title, id }) => (
                <Flex p={4} key={`${title}-${id}`}>
                  <ThemeIcon color='teal' size={24} radius='xl' mr={12}>
                    <IconCircleCheck size='1rem' />
                  </ThemeIcon>
                  <Flex justify='space-between' align='center' w='100%'>
                    <Anchor component={Link} to={`/lesson/${2}/${id}`}>
                      {title}
                    </Anchor>
                    <Text color='green'>20/20</Text>
                  </Flex>
                </Flex>
              ))}
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value='simulacion-eventos'>
            <Accordion.Control>Simulación de eventos</Accordion.Control>
            <Accordion.Panel>
              {sampleLessons[3].map(({ title, id }) => (
                <Flex p={4} key={`${title}-${id}`}>
                  <ThemeIcon color='teal' size={24} radius='xl' mr={12}>
                    <IconCircleCheck size='1rem' />
                  </ThemeIcon>
                  <Flex justify='space-between' align='center' w='100%'>
                    <Anchor component={Link} to={`/lesson/${3}/${id}`}>
                      {title}
                    </Anchor>
                    <Text color='green'>20/20</Text>
                  </Flex>
                </Flex>
              ))}
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value='algoritmos-probabilisticos'>
            <Accordion.Control>Algoritmos probabilisticos</Accordion.Control>
            <Accordion.Panel>
              {sampleLessons[4].map(({ title, id }) => (
                <Flex p={4} key={`${title}-${id}`}>
                  <ThemeIcon color='teal' size={24} radius='xl' mr={12}>
                    <IconCircleCheck size='1rem' />
                  </ThemeIcon>
                  <Flex justify='space-between' align='center' w='100%'>
                    <Anchor component={Link} to={`/lesson/${4}/${id}`}>
                      {title}
                    </Anchor>
                    <Text color='green'>20/20</Text>
                  </Flex>
                </Flex>
              ))}
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value='redes-colas'>
            <Accordion.Control>Redes de colas</Accordion.Control>
            <Accordion.Panel>
              {sampleLessons[5].map(({ title, id }) => (
                <Flex p={4} key={`${title}-${id}`}>
                  <ThemeIcon color='teal' size={24} radius='xl' mr={12}>
                    <IconCircleCheck size='1rem' />
                  </ThemeIcon>
                  <Flex justify='space-between' align='center' w='100%'>
                    <Anchor component={Link} to={`/lesson/${5}/${id}`}>
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
    </Box>
  );
};
