import React from 'react';
import { Flex, Box, Icon, chakra } from '@chakra-ui/react';
import { ErrorIcon } from 'react-hot-toast';

export default function Error({ message = "Error Fetching Data"}) {
  return (
    <Flex
      w="full"
      p={50}
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
        <Flex justifyContent="center" alignItems="center" w={12} bg="red.500">
          <Icon as={ErrorIcon} color="white" boxSize={6} />
        </Flex>

        <Box mx={-3} py={2} px={4}>
          <Box mx={3}>
            <chakra.span
              color="red.500"
              _dark={{
                color: 'red.400',
              }}
              fontWeight="bold"
            >
              Error
            </chakra.span>
            <chakra.p
              color="gray.600"
              _dark={{
                color: 'gray.200',
              }}
              fontSize="sm"
            >
              {message}
            </chakra.p>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
