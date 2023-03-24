import { useState } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { languages } from '../enums/languages';

function SelectLanguageTabs() {
  const [activeTab, setActiveTab] = useState(languages.Spanish);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Flex wrap="wrap" justify="center" align="center">
      <Button
        size={['sm', 'md']}
        mr="1"
        variant={activeTab === languages.Spanish ? 'solid' : 'outline'}
        onClick={() => handleTabClick(languages.Spanish)}
      >
        Spanish
      </Button>
      <Button
        size={['sm', 'md']}
        mr="1"
        variant={activeTab === languages.French ? 'solid' : 'outline'}
        onClick={() => handleTabClick(languages.French)}
      >
        French
      </Button>
      <Button
        size={['sm', 'md']}
        mr="1"
        variant={activeTab === languages.Portuguese ? 'solid' : 'outline'}
        onClick={() => handleTabClick(languages.Portuguese)}
      >
        Portuguese
      </Button>
      <Button
        size={['sm', 'md']}
        mr="1"
        variant={activeTab === languages.Mandarin ? 'solid' : 'outline'}
        onClick={() => handleTabClick(languages.Mandarin)}
      >
        Mandarin
      </Button>
    </Flex>
  );
}

export default SelectLanguageTabs;
