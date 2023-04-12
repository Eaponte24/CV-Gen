const { OpenAIApi } = require('openai');

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
};

module.exports = resolvers;
