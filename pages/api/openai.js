// filename: openai.js
// file location: /pages/api/openai.js
import { Configuration, OpenAIApi } from "openai";
import defaultPrompts from "../../prompts/defaultPrompts";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

console.log('API Key:', process.env.OPENAI_API_KEY);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }

  const payload = req.body.payload || "";
  console.log("The payload is: ", payload);
  if (payload.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid input",
      },
    });
    return;
  }

  const userMessages = req.body.userMessages || [];
  const assistantMessages = req.body.assistantMessages || [];

  try {
    const userMessage = {
      role: "user",
      content: payload,
    };

    const messages = [
      ...defaultPrompts,
      ...userMessages.map((content) => ({ role: "user", content })),
      ...assistantMessages.map((content) => ({ role: "assistant", content })),
      userMessage,
    ];

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 0,
      max_tokens: 510,
      "top_p": 0,
    });
    res.status(200).json({ result: completion.data.choices[0].message.content });
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}
