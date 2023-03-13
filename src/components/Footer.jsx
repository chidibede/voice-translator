import { Box, Flex, Text, Link } from '@chakra-ui/react';

function Footer() {
  return (
    <Box as="footer" py={10} color="gray.800">
      <Flex direction="column" align="center">
        <Text fontSize="sm" mb={2}>
          Copyright © 2023 Multi Lingua Link.
        </Text>
        <Link isExternal href="https://linkedin.com/in/chidibede" fontSize="sm">
          Made with ❤️ by Chidi Bede Enwereji
        </Link>
      </Flex>
    </Box>
  );
}

export default Footer;
