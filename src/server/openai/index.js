const { Configuration, OpenAIApi } = require("openai");
const { OPEN_AI_KEY } = require("../../enums");

const configuration = new Configuration({
  apiKey: OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);

export default openai
