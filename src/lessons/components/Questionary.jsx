import React, { useEffect, useState } from 'react';

import { Button, Box, Group, Radio, Alert, Flex, Stack } from '@mantine/core';

import { IconAlertCircle } from '@tabler/icons-react';

export const Questionary = ({ content, canCanjear }) => {
  const [questionary, setQuestionary] = useState(content);

  const onChangeRadio = (id) => {
    setShow(false);
    setQuestionary((prevState) =>
      prevState.map((question) => {
        if (question.id === id) {
          return {
            ...question,
            active: true,
          };
        } else {
          return {
            ...question,
            active: false,
          };
        }
      })
    );
  };

  const [show, setShow] = useState(false);

  const selectedQuestion = questionary.find((question) => question.active);

  useEffect(() => {
    canCanjear(show && selectedQuestion.correct);
  }, [show, selectedQuestion]);

  return (
    <Box>
      <Stack gap={10} dir='col' mt='xs'>
        {questionary.map((option, index) => (
          <Radio
            checked={option.active}
            onChange={() => onChangeRadio(option.id)}
            key={index}
            label={`${option.point}) ${option.text}`}
            value={option.id}
          />
        ))}
      </Stack>

      {show && selectedQuestion && (
        <>
          {selectedQuestion.correct ? (
            <Alert
              mt={12}
              icon={<IconAlertCircle size='1rem' />}
              title={`Respuesta correcta`}
              color='green'
            ></Alert>
          ) : (
            <Alert
              mt={12}
              icon={<IconAlertCircle size='1rem' />}
              title={`Respuesta incorrecta`}
              color='red'
            ></Alert>
          )}
        </>
      )}

      <Button my={16} variant='light' onClick={() => setShow(true)}>
        Comprobar
      </Button>
    </Box>
  );
};
