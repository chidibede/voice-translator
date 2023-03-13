import axios from 'axios';
import { OPEN_AI_KEY, OPEN_AI_URL } from '../enums';

const transcribeAudio = async (data) => {
  try {
    const { data: response } = await axios.post(OPEN_AI_URL, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${OPEN_AI_KEY}`,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default transcribeAudio;
