import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import FileUploadTranscriber from './FileUploadTranscriber';
import React from 'react';
import ProtectedRoute from './ProtectedRoute';
import AppHeader from './AppHeader';
import NavBar from './Navbar';
import Footer from './Footer';
import TranscriptionContainer from './TranscriptionContainer';
import RecordView from './Recorder';
import YoutubeTranscriber from './YoutubeTranscriber';

export default function MainPage() {
  return (
    <ProtectedRoute>
      <NavBar />
      <AppHeader />
      <Box w="60%" mx="auto" mt="4">
        <Tabs variant="line">
          <TabList>
            <Tab>Upload Audio</Tab>
            <Tab>Record Audio</Tab>
            <Tab>Youtube</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <TranscriptionContainer>
                <FileUploadTranscriber />
              </TranscriptionContainer>
            </TabPanel>
            <TabPanel>
              <TranscriptionContainer>
                <RecordView />
              </TranscriptionContainer>
            </TabPanel>
            <TabPanel>
              <TranscriptionContainer>
                <YoutubeTranscriber />
              </TranscriptionContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Footer />
    </ProtectedRoute>
  );
}
