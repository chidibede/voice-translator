import { Heading, Box, Text } from '@chakra-ui/react';
import React from 'react';

export default function AppHeader() {
  return (
    <Box>
      <Heading
        as="h1"
        fontSize="4xl"
        fontWeight="extrabold"
        textAlign="center"
        color="blue.700"
        mt="4"
      >
        Audio Transcriber and Translator
      </Heading>

      <Text
        fontSize="lg"
        fontWeight="semibold"
        textAlign="center"
        color="gray.600"
        mt="8"
        mb="8"
      >
        This is an audio transcription and translation app that helps people understand and communicate in another language without learning the language.
      </Text>
    </Box>
  );
}
