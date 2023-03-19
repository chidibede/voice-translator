import { AWS_ACCESS_KEY, AWS_ACCESS_SECRET_KEY } from '../../enums';

import * as AWS from "@aws-sdk/client-s3";

// AWS.config.region = 'eu-west-1';
// AWS.config.credentials = {
//   accessKeyId: AWS_ACCESS_KEY,
//   secretAccessKey: AWS_ACCESS_SECRET_KEY,
// };

export const awsConvertTextToSpeech = async (text) => {
  const polly = new AWS.Polly({ apiVersion: '2016-06-10' });

  const params = {
    OutputFormat: 'mp3' /* required */,
    Text: text /* required */,
    VoiceId: 'Sergio' /* required */,
    SampleRate: '16000',
    LanguageCode: 'es-ES',
    TextType: 'text',
    Engine: 'neural',
  };

  const response = await polly.synthesizeSpeech(params).promise();
  return response;
};
