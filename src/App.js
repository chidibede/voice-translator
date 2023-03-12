import * as React from 'react'
import './App.css'
import { Toaster } from 'react-hot-toast';

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Main from './components/Main'
import AppHeader from './components/AppHeader';

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <AppHeader />
      <Main />
      <Toaster position="top-right" />
    </ChakraProvider>
  )
}

export default App