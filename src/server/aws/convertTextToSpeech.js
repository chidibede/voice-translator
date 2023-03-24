import axios from 'axios';
import { AWS_FILE_SERVICES_API_KEY, AWS_FILE_SERVICES_URL } from '../../enums';

const generateSpeaker = (language) => {
  const speakers = {
    'es-ES': 'Sergio',
    'fr-FR': 'Lea',
    'ar-AE': 'Hala',
    'pt-BR': 'Thiago',
    'de-DE': 'Daniel',
    'cmn-CN': 'Zhiyu',
    'en-GB': 'Brian',
  }

  return speakers[language]
}

export const convertTextToSpeech = async (text, language) => {
  const speaker = generateSpeaker(language)
  const ssmlText = "<speak><prosody rate='85%'>" + text + '</prosody></speak>';
  try {
    const params = {
      OutputFormat: 'mp3',
      Text: ssmlText,
      VoiceId: speaker,
      SampleRate: '22050',
      LanguageCode: language,
      TextType: 'ssml',
      Engine: 'neural',
    };

    const { data: response } = await axios.post(
      `${AWS_FILE_SERVICES_URL}/api/speech`,
      params,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': AWS_FILE_SERVICES_API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
