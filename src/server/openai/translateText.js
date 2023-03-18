import axios from 'axios';
import { OPEN_AI_KEY, OPEN_AI_URL } from '../../enums';
import generateTranslationPrompt from './generateTranslationPrompt';

async function translateText(
  textTotranslate,
  language,
  model = 'text-davinci-003'
) {
  try {
    const prompt = generateTranslationPrompt(textTotranslate, language);
    const body = {
      model,
      prompt,
      temperature: 0.3,
      max_tokens: 3990,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    const response = await axios.post(`${OPEN_AI_URL}/v1/completions`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPEN_AI_KEY}`,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
}

export default translateText;
