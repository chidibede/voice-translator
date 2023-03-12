import { Box, Center } from '@chakra-ui/react';
import FileUpload from './FileUpload';
import React from 'react';

export default function Main() {
  return (
    <Box>
     <FileUpload accept={'audio'} />
    </Box>
  );
}
