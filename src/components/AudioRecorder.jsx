import { useState } from 'react';
import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import { ReactMic } from 'react-mic';

function AudioRecorder({ recorderProps }) {
  const {
    startRecording,
    stopRecording,
    onStop,
    isRecording,
  } = recorderProps;

  return (
    <Box w="80" textAlign="center" mr="24">
      <ReactMic
        record={isRecording}
        onStop={onStop}
        width="300"
        height={20}
        visualSetting="frequencyBars"
        mimeType="audio/mp3"
      />
      <Button
        onClick={() => {
          if (isRecording) {
            stopRecording();
          } else {
            startRecording();
          }
        }}
        disabled={isRecording}
        colorScheme={'orange'}
        fontWeight="light"
      >
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </Button>
    </Box>
  );
}

export default AudioRecorder;
