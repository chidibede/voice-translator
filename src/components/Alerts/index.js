import { Box } from '@chakra-ui/react';
import React from 'react';
import Info from './Info';
import Success from './Success';
import Warning from './Warning';
import Error from './Error';

export default function Alerts({ status }) {
  if (status === 'success') {
    return <Success />;
  }

  if (status === 'error') {
    return <Error message='Error Transcribing audio' />;
  }

  if (status === 'warning') {
    return <Warning />;
  }
  return <Info />;
}
