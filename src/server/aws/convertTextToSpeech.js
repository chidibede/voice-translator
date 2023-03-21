import axios from 'axios';
import { AWS_FILE_SERVICES_API_KEY, AWS_FILE_SERVICES_URL } from '../../enums';

export const convertTextToSpeech = async (text) => {
  try {
    const params = {
      OutputFormat: 'mp3' /* required */,
      Text: text /* required */,
      VoiceId: 'Sergio' /* required */,
      SampleRate: '16000',
      LanguageCode: 'es-ES',
      TextType: 'text',
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
