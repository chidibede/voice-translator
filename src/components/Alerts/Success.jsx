import { CheckCircleIcon } from '@chakra-ui/icons';
import { Flex, Box, Icon , chakra} from '@chakra-ui/react';
import React from 'react';

export default function Success() {
  return (
      <Flex
        w="full"
        bg="#edf3f8"
        _dark={{
          bg: '#3e3e3e',
        }}
        p={50}
        shadow="md"
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
          rounded="lg"
          overflow="hidden"
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            w={12}
            bg="green.500"
          >
            <Icon as={CheckCircleIcon} color="white" boxSize={6} />
          </Flex>

          <Box mx={-3} py={2} px={4}>
            <Box mx={3}>
              <chakra.span
                color="green.500"
                _dark={{
                  color: 'green.400',
                }}
                fontWeight="bold"
              >
                Success
              </chakra.span>
              <chakra.p
                color="gray.600"
                _dark={{
                  color: 'gray.200',
                }}
                fontSize="sm"
              >
                Your account was registered!
              </chakra.p>
            </Box>
          </Box>
        </Flex>
      </Flex>
  );
}