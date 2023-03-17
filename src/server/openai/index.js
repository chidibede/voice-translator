import { Configuration, OpenAIApi } from 'openai';
import { OPEN_AI_KEY } from '../../enums';

const configuration = new Configuration({
  apiKey: OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);

export default openai;
