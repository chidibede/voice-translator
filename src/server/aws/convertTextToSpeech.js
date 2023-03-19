import { AWS_ACCESS_KEY, AWS_ACCESS_SECRET_KEY } from '../../enums';
import { PollyClient, DeleteLexiconCommand } from '@aws-sdk/client-polly';

const client = new PollyClient({
  region: 'eu-west-1',
  credentials: {
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_ACCESS_SECRET_KEY,
  },
});

export const convertTextToSpeech = async (text) => {
  const params = {
    OutputFormat: 'mp3' /* required */,
    Text: text /* required */,
    VoiceId: 'Sergio' /* required */,
    SampleRate: '16000',
    LanguageCode: 'es-ES',
    TextType: 'text',
    Engine: 'neural',
  };

  const command = new DeleteLexiconCommand(params);

  try {
    const response = await client.send(command);
    // process data.
    return response;
  } catch (error) {
    // error handling.
    console.log(error);
  }
};
