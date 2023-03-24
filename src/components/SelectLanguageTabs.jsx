import { Button, Grid } from '@chakra-ui/react';
import { languageCode, languages } from '../enums/languages';

function SelectLanguageTabs({ handleTabClick, activeTab }) {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={'2'} wrap="wrap">
      <Button
        colorScheme="blue"
        size={['sm', 'md']}
        mr="1"
        mb="2"
        variant={activeTab === languageCode.Spanish ? 'solid' : 'outline'}
        onClick={() => handleTabClick(languageCode.Spanish)}
      >
        {languages[languageCode.Spanish]}
      </Button>
      <Button
        colorScheme="blue"
        size={['sm', 'md']}
        mr="1"
        mb="2"
        variant={activeTab === languageCode.French ? 'solid' : 'outline'}
        onClick={() => handleTabClick(languageCode.French)}
      >
        {languages[languageCode.French]}
      </Button>
      <Button
        colorScheme="blue"
        size={['sm', 'md']}
        mr="1"
        mb="2"
        variant={activeTab === languageCode.Portuguese ? 'solid' : 'outline'}
        onClick={() => handleTabClick(languageCode.Portuguese)}
      >
        {languages[languageCode.Portuguese]}
      </Button>
      <Button
        colorScheme="blue"
        size={['sm', 'md']}
        mr="1"
        mb="2"
        variant={activeTab === languageCode.Mandarin ? 'solid' : 'outline'}
        onClick={() => handleTabClick(languageCode.Mandarin)}
      >
        {languages[languageCode.Mandarin]}
      </Button>
      <Button
        colorScheme="blue"
        size={['sm', 'md']}
        mr="1"
        mb="2"
        variant={activeTab === languageCode.English ? 'solid' : 'outline'}
        onClick={() => handleTabClick(languageCode.English)}
      >
        {languages[languageCode.English]}
      </Button>
      <Button
        colorScheme="blue"
        size={['sm', 'md']}
        mr="1"
        mb="2"
        variant={activeTab === languageCode.Arabic ? 'solid' : 'outline'}
        onClick={() => handleTabClick(languageCode.Arabic)}
      >
        {languages[languageCode.Arabic]}
      </Button>
    </Grid>
  );
}

export default SelectLanguageTabs;
