import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { ChakraProvider } from '@chakra-ui/react';
import MainPage from './components/Main';
import Login from './components/Login';
import About from './components/About';
import Register from './components/Register';
import SetPassword from './components/SetPassword';

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/transcribe" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/set-password" element={<SetPassword />} />
      </Routes>
        <Toaster position="top-right" />
    </ChakraProvider>
  );
}

export default App;
