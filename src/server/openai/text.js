import openai from '.';
import generateTranslationPrompt from './generateTranslationPrompt';

async function translateText(textTotranslate, language, model = 'text-davinci-003') {
  try {
    const prompt = generateTranslationPrompt(textTotranslate, language);
    const response = await openai.createCompletion({
      model,
      prompt,
      temperature: 0.3,
      max_tokens: 3990,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    return response;
  } catch (error) {
    throw error;
  }
}

export default translateText;
