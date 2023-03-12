import * as React from 'react'
import './App.css'
import { Toaster } from 'react-hot-toast';

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Main from './components/Main'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Main />
      <Toaster position="top-right" />
    </ChakraProvider>
  )
}

export default App