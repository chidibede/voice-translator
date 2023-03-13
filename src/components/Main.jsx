import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import FileUpload from './FileUpload';
import React from 'react';
import ProtectedRoute from './ProtectedRoute';
import AppHeader from './AppHeader'

export default function MainPage() {
  return (
    <ProtectedRoute>
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
              <FileUpload accept={'audio'} />
            </TabPanel>
            <TabPanel>
              <p>Record transcription!</p>
            </TabPanel>
            <TabPanel>
              <p>Youtube transcription!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </ProtectedRoute>
  );
}
