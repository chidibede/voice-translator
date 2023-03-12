import React from 'react';
import { Flex, Box, Icon , chakra} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

export default function Warning() {
  return (
      <Flex
        bg="#edf3f8"
        _dark={{
          bg: '#3e3e3e',
        }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          maxW="sm"
          w="full"
          mx="auto"
          bg="white"
          _dark={{
            bg: 'gray.800',
          }}
          shadow="md"
          rounded="lg"
          overflow="hidden"
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            w={12}
            bg="yellow.500"
          >
            <Icon as={InfoIcon} color="white" boxSize={6} />
          </Flex>

          <Box mx={-3} py={2} px={4}>
            <Box mx={3}>
              <chakra.span
                color="yellow.400"
                _dark={{
                  color: 'yellow.300',
                }}
                fontWeight="bold"
              >
                Warning
              </chakra.span>
              <chakra.p
                color="gray.600"
                _dark={{
                  color: 'gray.200',
                }}
                fontSize="sm"
              >
                Your image size is too large!
              </chakra.p>
            </Box>
          </Box>
        </Flex>
      </Flex>
  );
}
