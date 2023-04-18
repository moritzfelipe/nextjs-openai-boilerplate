# Next.js OpenAI Boilerplate

This is a simple Next.js boilerplate project that demonstrates how to integrate the OpenAI API with a Next.js application. The boilerplate includes a basic user interface for submitting prompts and displaying the response from the OpenAI API.

## Features

-   Next.js setup with a minimalistic user interface
-   Customizable prompts separated in a different folder
-   Utilizes OpenAI's GPT-3.5 Turbo model for chat completion
-   Built-in error handling and loading state management
-   Responsive design that works on both desktop and mobile devices

## Getting Started

### Prerequisites

Before you start, you'll need to have the following installed on your machine:

-   [Node.js](https://nodejs.org/en/download/) (version 12 or higher)
-   [npm](https://www.npmjs.com/get-npm) (usually bundled with Node.js) or [Yarn](https://yarnpkg.com/getting-started/install)

### Installation

1.  Clone this repository:

    `git clone https://github.com/your-username/nextjs-openai-boilerplate.git`

2.  Navigate to the project directory:


    `cd nextjs-openai-boilerplate`

3.  Install dependencies:

    `npm install`

    or

    `yarn install`

4.  Create a `.env.local` file in the project root directory and add your OpenAI API key:


    `OPENAI_API_KEY=your_openai_api_key`

    Replace `your_openai_api_key` with your actual OpenAI API key. You can find your API key in your [OpenAI Dashboard](https://platform.openai.com/account/api-keys).

5.  Start the development server:

    `npm run dev`

    or

    `yarn dev`

6.  Open your browser and navigate to [http://localhost:3000](http://localhost:3000/). You should now see the boilerplate application running.


## OpenAI API: Generating Chat Completions

The `openai.createChatCompletion()` function is part of the OpenAI API, which allows developers to generate text using machine learning models. Specifically, `createChatCompletion()` is used to generate completions for chat-based models, such as the GPT-3.5-turbo model, which is designed for generating responses in a conversational format.

### Usage

```javascript
const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: messages,
  temperature: 0,
  max_tokens: 510,
  top_p: 0,
});
```

### Parameters

> model: (string, required) - Specifies the name of the model to use for generating completions. In this example, "gpt-3.5-turbo" is used, which is a chat-based language model.

> messages: (array of objects, required) - Specifies an array of message objects, where each object has a role ("system", "user", or "assistant") and content (the actual text of the message). Messages are processed in the order they appear in the array, and the assistant responds accordingly.

> temperature: (number, optional) - Controls the randomness of the generated completions. A higher value (e.g., 0.8) makes the output more random, while a lower value (e.g., 0.2) makes it more deterministic.

> max_tokens: (number, optional) - Specifies the maximum number of tokens (words or word pieces) in the generated completion. Use this to limit the length of the output.

> top_p: (number, optional) - Controls the diversity of the generated completions by limiting the choices to a subset of the most likely tokens. A lower value (e.g., 0.2) makes the output more focused, while a higher value (e.g., 0.8) makes it more diverse.

Form more please use the OpenAI [documantation](https://platform.openai.com/docs/introduction).

## Customizing Prompts

To customize the prompts or add new message types, update the `defaultPrompts` array in the `prompts/defaultPrompts.js` file or create new files for different sets of prompts in the `prompts` folder.

## Deploying

To deploy your application, you can use [Vercel](https://vercel.com/), the platform built by the creators of Next.js. Follow the [official Next.js deployment documentation](https://nextjs.org/docs/deployment) for a detailed guide on deploying your Next.js application to Vercel or other hosting providers.

## Contributing

Contributions are welcome! If you'd like to contribute, feel free to submit a pull request or create an issue on the repository.

## License

This project is licensed under the MIT License. See the [LICENSE](https://chat.openai.com/LICENSE) file for more details.
