// file: /prompts/promptUtils.js
export function getSystemPrompt() {
  return {
    role: "system",
    content: "You are a helpful assistant that specializes in generating creative pet names.",
  };
}

export function getUserPrompt(input) {
  return {
    role: "user",
    content: `Generate a creative pet name and short description for a ${input}. Only respond with a JSON no text. The response should be in JSON format with two fields: "name" and "description".`,
  };
}
