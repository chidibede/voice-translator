import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import FileUpload from './FileUpload';
import React from 'react';

export default function Main() {
  return (
    <Box w="60%" mx="auto" mt="4">
      <Tabs variant="line">
        <TabList>
          <Tab>Upload Audio</Tab>
          <Tab>Record Audio</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <FileUpload accept={'audio'} />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
