import axios from 'axios';
import { AWS_FILE_SERVICES_API_KEY, AWS_FILE_SERVICES_URL } from '../../enums';

export const convertTextToSpeech = async (text) => {
  const ssmlText = "<speak><prosody rate='85%'>" + text + '</prosody></speak>';
  try {
    const params = {
      OutputFormat: 'mp3',
      Text: ssmlText,
      VoiceId: 'Sergio',
      SampleRate: '22050',
      LanguageCode: 'es-ES',
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
