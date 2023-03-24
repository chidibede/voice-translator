import { useState } from 'react';
import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import { ReactMic } from 'react-mic';

function AudioRecorder({ recorderProps }) {
  const {
    startRecording,
    stopRecording,
    // onData,
    onStop,
    isRecording,
    // audioBlob,
  } = recorderProps;

  return (
    <Box w="80" textAlign="center" mr="24">
      <ReactMic
        record={isRecording}
        // onData={onData}
        onStop={onStop}
        width="300"
        height={60}
        visualSetting="frequencyBars"
        mimeType="audio/mp3"
      />
      <Flex direction="row" align="center" justifyContent={'space-between'} mb="8">
        <Button
          onClick={startRecording}
          disabled={isRecording}
          colorScheme={'orange'}
          fontWeight="light"
        >
          Start Recording
        </Button>
        <Button
          onClick={stopRecording}
          disabled={!isRecording}
          colorScheme={'orange'}
          fontWeight="light"
        >
          Stop Recording
        </Button>
      </Flex>

      {/* {audioBlob && <audio src={URL.createObjectURL(audioBlob)} controls />} */}
    </Box>
  );
}

export default AudioRecorder;
