import { DeleteIcon } from '@chakra-ui/icons';
import {
  Box,
  VStack,
  Text,
  Button,
  Center,
  HStack,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { BeatLoader } from 'react-spinners';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { OPEN_AI_WHISPER_MODEL } from '../enums';
import transcribeAudio from '../server/openai/transcribeAudio';
import translateText from '../server/openai/translateText';
import { convertTextToSpeech } from '../server/aws/convertTextToSpeech';

const playAudio = (audioStream) => {
  const uInt8Array = new Uint8Array(audioStream);
  const arrayBuffer = uInt8Array.buffer;
  const blob = new Blob([arrayBuffer]);
  const url = URL.createObjectURL(blob);

  const elementId = 'audioElement' + new Date().valueOf().toString();
  const audioElement = document.createElement('audio');
  audioElement.setAttribute('id', elementId);
  document.body.appendChild(audioElement);
  audioElement.src = url;
  audioElement.play();
};

export default function TranscriptionContainer({ children }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [transcribedAudioText, setTranscribedAudioText] = useState('');
  const defaultWidth = '80%';

  const handleTranscription = async () => {
    try {
      setLoading(true);
      const data = new FormData();
      data.append('file', file);
      data.append('model', OPEN_AI_WHISPER_MODEL);
      const { text } = await transcribeAudio(data);
      const translatedResponse = await translateText(text, 'Spanish');
      const translatedText = translatedResponse.data.choices[0].text;
      const { AudioStream } = await convertTextToSpeech(translatedText);
      playAudio(AudioStream.data);

      setLoading(false);
      setTranscribedAudioText(translatedText);
      setFile(null);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error('Error transcribing audio');
    }
  };

  useEffect(() => {
    if (file) {
      handleTranscription();
    }
  }, [file]);

  const handleFileRemoval = (event) => {
    setFile(null);
  };

  const handleFileUpload = (event) => {
    const { files } = event.target;
    setFile(files[0]);
  };

  return (
    <VStack my="12">
      <Box h="90%" w="80%">
        <Box
          borderColor="gray.300"
          borderStyle="dashed"
          // w="6xl"
          borderWidth="2px"
          rounded="md"
          shadow="sm"
          role="group"
          transition="all 150ms ease-in-out"
          _hover={{
            shadow: 'md',
          }}
          py="4"
          as={motion.div}
          initial="rest"
          animate="rest"
          whileHover="hover"
          cursor="pointer"
        >
          {React.cloneElement(children, { file, handleFileUpload })}
        </Box>
      </Box>
      <Box h="0.5"></Box>
      {file && (
        <Box
          backgroundColor="orange.100"
          py="4"
          px="4"
          w={defaultWidth}
          justifyContent="center"
        >
          <Flex direction="row" justifyContent="space-between">
            <Box>
              <Text>{file.name}</Text>
            </Box>
            <Spacer />
            <Box>
              <DeleteIcon cursor="pointer" onClick={handleFileRemoval} />
            </Box>
          </Flex>
        </Box>
      )}
      {transcribedAudioText && (
        <Center
          backgroundColor="orange.100"
          py="4"
          px="4"
          w={defaultWidth}
          justifyContent="center"
        >
          <HStack spacing="28" cursor="pointer">
            <Text>{transcribedAudioText}</Text>
          </HStack>
        </Center>
      )}
      <Box h="0.5"></Box>
      <Button
        isLoading={loading}
        loadingText="Transcribing"
        spinner={<BeatLoader size={8} color="white" />}
        spinnerPlacement="end"
        py="4"
        px="4"
        w={defaultWidth}
        isDisabled={!file && !transcribedAudioText}
        colorScheme="blue"
        onClick={async () => {
          if (transcribedAudioText) {
            setTranscribedAudioText('');
          } else {
            await handleTranscription();
          }
        }}
      >
        {transcribedAudioText ? 'Reset' : 'Transcribe Audio'}
      </Button>
    </VStack>
  );
}
