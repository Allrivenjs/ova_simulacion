import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  Container,
  Flex,
  Image,
  Modal,
  Text,
  Title,
} from '@mantine/core';
import { Prism } from '@mantine/prism';
import { sampleLessons } from '../../sampleLesson';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';

import winnerSfx from '../../assets/winner.mp3';

import useSound from 'use-sound';

import Confetti from 'react-confetti';

import ova from '../../assets/ova.png';
import { OvaCharacter } from '../components';
import { Questionary } from '../components/Questionary';

export const LessonPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const [playWinner] = useSound(winnerSfx);

  const [opened, { open, close }] = useDisclosure(false);

  const [page, setPage] = useState(0);

  const [canCanjear, setCanCanjear] = useState(false);

  const handleOnClickNext = () => {
    setPage((prevState) => prevState + 1);
  };

  const handleOnClickBack = () => {
    setPage((prevState) => prevState - 1);
  };

  useEffect(() => {
    setSearchParams({ page: page });
  }, [page]);

  let { index, id } = useParams();

  return (
    <>
      <Container size='md' px='xs' my={64}>
        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Flex w='100%' h='100%' justify='center' direction='column'>
            {sampleLessons[index][id].lessons[page].content.map(
              (lesson, index) => {
                switch (lesson.type) {
                  case 'title':
                    return (
                      <Title key={id + index} my={12}>
                        {lesson.content}
                      </Title>
                    );
                  case 'title2':
                    return (
                      <Title key={id + index} my={12} order={3}>
                        {lesson.content}
                      </Title>
                    );
                  case 'paragraph':
                    return (
                      <Text key={id + index} my={12} size='lg'>
                        {lesson.content}
                      </Text>
                    );
                  case 'snippet':
                    return (
                      <Prism
                        key={id + index}
                        my={12}
                        language='javascript'
                        withLineNumbers
                      >
                        {lesson.content}
                      </Prism>
                    );
                  case 'questionary':
                    return (
                      <Questionary
                        key={id + index}
                        content={lesson.content}
                        canCanjear={setCanCanjear}
                      />
                    );
                  default:
                    break;
                }
              },
            )}
            <OvaCharacter
              message={sampleLessons[index][id].lessons[page].ovaMessage}
              side={sampleLessons[index][id].lessons[page].ovaSide}
            />
            <Flex justify='space-between' mt={32}>
              {page > 0 && (
                <Button
                  size='md'
                  variant='outline'
                  color='red'
                  onClick={() => handleOnClickBack()}
                >
                  Atras
                </Button>
              )}
              {page === sampleLessons[index][id].lessons.length - 1 ? (
                <Button
                  size='md'
                  color='green'
                  onClick={() => {
                    playWinner();
                    open();

                    const points = Number(localStorage.getItem('points')) || 0;
                    localStorage.setItem('points', points + 20);
                  }}
                  disabled={!canCanjear}
                >
                  Canjear recompensa
                </Button>
              ) : (
                <Button
                  size='md'
                  color='green'
                  onClick={() => handleOnClickNext()}
                  disabled={page >= sampleLessons[index][id].lessons.length - 1}
                >
                  Siguiente
                </Button>
              )}
            </Flex>
          </Flex>
        </Card>
      </Container>
      <Modal
        opened={opened}
        onClose={close}
        title='Felicidades! desafio completado'
      >
        <Image maw={240} mx='auto' radius='md' src={ova} alt='Random image' />
        <Flex justify='center' mt={14}>
          <Text size='lg'>Recibes 20 puntos más!</Text>
        </Flex>

        <Flex justify='center' mt={14}>
          <Button
            size='xs'
            variant='outline'
            color='green'
            onClick={() => navigate('/')}
          >
            Volver a los desafios
          </Button>
        </Flex>
      </Modal>

      {opened && <Confetti gravity={0.3} />}
    </>
  );
};
