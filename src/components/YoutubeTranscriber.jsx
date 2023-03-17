import {
  Box,
  VStack,
  forwardRef,
  Heading,
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';


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
      cursor="pointer"
      backgroundImage={`url("https://image.shutterstock.com/image-photo/paella-traditional-classic-spanish-seafood-600w-1662253543.jpg")`}
      {...props}
      ref={ref}
    />
  );
});

export default function YoutubeTranscriber({ file, handleFileUpload }) {

  return (
    <VStack my="12">
      <Box position="relative" height="100%" width="100%">
        <Box
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
              <PreviewImage variants={first} backgroundImage="youtube-1.jpg" />
              <PreviewImage variants={second} backgroundImage="youtube-2.jpg" />
              <PreviewImage variants={third} backgroundImage="youtube-3.jpg" />
            </Box>
            <Stack p="8" textAlign="center" spacing="4" cursor="pointer">
              <Heading fontSize="lg" color="gray.700" fontWeight="bold" mb="4">
                Paste youtube link here
              </Heading>
              <InputGroup size="md" w="xl">
                <InputLeftAddon children="https://" />
                <Input placeholder="youtube link" />
                <InputRightAddon children=".com" />
              </InputGroup>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </VStack>
  );
}
