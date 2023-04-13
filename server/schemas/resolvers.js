const { OpenAIApi } = require('openai');
const { v4: uuidv4 } = require('uuid');

const openai = new OpenAIApi(process.env.OPENAI_API_KEY);

const resolvers = {
  Query: {
    generateResponse: async (_, { prompt, length }) => {
      const response = await openai.complete({
        engine: 'davinci',
        prompt,
        maxTokens: length,
      });
      return response.choices[0].text;
    },
  },

  Mutation: {
    sendPrompt: async (_, { prompt }) => {
      const id = uuidv4();
      const response = await openai.createPrompt({
        prompt,
        id,
      });
      return {
        id,
        prompt,
      };
    },
  },
  
};

module.exports = resolvers;
