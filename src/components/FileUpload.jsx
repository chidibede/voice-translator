import { DeleteIcon } from '@chakra-ui/icons';
import {
  AspectRatio,
  Box,
  VStack,
  forwardRef,
  Heading,
  Input,
  Stack,
  Text,
  Button,
  Center,
  HStack,
} from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { OPEN_AI_WHISPER_MODEL } from '../enums';
import transcribeAudio from '../utils/transcribeAudio';

const first = {
  rest: {
    rotate: '-15deg',
    scale: 0.95,
    x: '-50%',
    filter: 'grayscale(80%)',
    transition: {
      duration: 0.5,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    x: '-70%',
    scale: 1.1,
    rotate: '-20deg',
    filter: 'grayscale(0%)',
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

const second = {
  rest: {
    rotate: '15deg',
    scale: 0.95,
    x: '50%',
    filter: 'grayscale(80%)',
    transition: {
      duration: 0.5,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    x: '70%',
    scale: 1.1,
    rotate: '20deg',
    filter: 'grayscale(0%)',
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

const third = {
  rest: {
    scale: 1.1,
    filter: 'grayscale(80%)',
    transition: {
      duration: 0.5,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    scale: 1.3,
    filter: 'grayscale(0%)',
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

const PreviewImage = forwardRef((props, ref) => {
  return (
    <Box
      bg="white"
      top="0"
      height="100%"
      width="100%"
      position="absolute"
      borderWidth="1px"
      borderStyle="solid"
      rounded="sm"
      borderColor="gray.400"
      as={motion.div}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundImage={`url("https://image.shutterstock.com/image-photo/paella-traditional-classic-spanish-seafood-600w-1662253543.jpg")`}
      {...props}
      ref={ref}
    />
  );
});

export default function App() {
  const controls = useAnimation();
  const startAnimation = () => controls.start('hover');
  const stopAnimation = () => controls.stop();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [transcribedAudioText, setTranscribedAudioText] = useState('');
  const defaultWidth = '60%';

  const handleFileUpload = (event) => {
    const { files } = event.target;
    setFile(files[0]);
  };

  const handleFileRemoval = (event) => {
    setFile(null);
  };

  const handleTranscription = async () => {
    try {
      setLoading(true);
      const data = new FormData();
      data.append('file', file);
      data.append('model', OPEN_AI_WHISPER_MODEL);
      const { text } = await transcribeAudio(data);
      setLoading(false);
      setTranscribedAudioText(text);
      setFile(null);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error('Error transcribing audio');
    }
  };

  return (
    <VStack my="12">
      <AspectRatio width={defaultWidth} ratio={2}>
        <Box
          borderColor="gray.300"
          borderStyle="dashed"
          w="6xl"
          borderWidth="2px"
          rounded="md"
          shadow="sm"
          role="group"
          transition="all 150ms ease-in-out"
          _hover={{
            shadow: 'md',
          }}
          as={motion.div}
          initial="rest"
          animate="rest"
          whileHover="hover"
        >
          <Box position="relative" height="100%" width="100%">
            <Box
              position="absolute"
              top="0"
              left="0"
              height="100%"
              width="100%"
              display="flex"
              flexDirection="column"
            >
              <Stack
                height="100%"
                width="100%"
                display="flex"
                alignItems="center"
                justify="center"
                spacing="4"
              >
                <Box height="16" width="12" position="relative">
                  <PreviewImage variants={first} backgroundImage="image.jpg" />
                  <PreviewImage variants={second} backgroundImage="audio.jpg" />
                  <PreviewImage variants={third} backgroundImage="video.jpg" />
                </Box>
                <Stack p="8" textAlign="center" spacing="4">
                  <Heading fontSize="lg" color="gray.700" fontWeight="bold">
                    Drop audio here
                  </Heading>
                  <Button colorScheme={'orange'} fontWeight="light">
                    or click to upload
                  </Button>
                </Stack>
              </Stack>
            </Box>
            <Input
              type="file"
              height="100%"
              width="100%"
              position="absolute"
              key={file}
              top="0"
              left="0"
              opacity="0"
              aria-hidden="true"
              accept="audio/*"
              onChange={handleFileUpload}
              onDragEnter={startAnimation}
              onDragLeave={stopAnimation}
            />
          </Box>
        </Box>
      </AspectRatio>
      <Box h="0.5"></Box>
      {file && (
        <Center
          backgroundColor="orange.100"
          py="4"
          px="4"
          w={defaultWidth}
          justifyContent="center"
        >
          <HStack spacing="28" cursor="pointer">
            <Text>{file.name}</Text>
            <DeleteIcon onClick={handleFileRemoval} />
          </HStack>
        </Center>
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
        loadingText="Transcribing..."
        py="4"
        px="4"
        w={defaultWidth}
        colorScheme="blue"
        onClick={async () => {
          if (transcribedAudioText) {
            setTranscribedAudioText('');
          } else {
            await handleTranscription();
          }
        }}
      >
        {transcribedAudioText ? 'Reset' : 'Transcribe'}
      </Button>
    </VStack>
  );
}
