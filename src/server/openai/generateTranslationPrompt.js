import { languages } from "../../enums/languages";

export default function generateTranslationPrompt(text, language) {
  const prompt = `Translate this into 1. ${languages[language]}:\n\n${text}\n\n1.`;
  return prompt;
}
