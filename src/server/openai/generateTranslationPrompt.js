export default function generateTranslationPrompt(text, language) {
  const prompt = `Translate this into 1. ${language}:\n\n${text}\n\n1.`;
  return prompt;
}
