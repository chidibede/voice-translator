import axios from 'axios';
import { ELEVEN_LABS_API_KEY, ELEVEN_LABS_URL, ELEVEN_LABS_VOICE_ID } from '../../enums';

export const convertTextToSpeech = async (text) => {
  const body = {
    text,
    voice_settings: {
      stability: 0,
      similarity_boost: 0,
    },
  };

  const response = await axios.post(
    `${ELEVEN_LABS_URL}/v1/text-to-speech/${ELEVEN_LABS_VOICE_ID}/stream`,
    body,
    {
      headers: {
        'xi-api-key': `${ELEVEN_LABS_API_KEY}`,
      },
    }
  );

  return response;
};
