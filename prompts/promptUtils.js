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
    content: `Give me a creative pet name for a ${input}`,
  };
}
