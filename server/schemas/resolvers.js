const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const resolvers = {
  Query: {
    retrieveModel: async (_, { modelName }) => {
      const response = await openai.retrieveModel(modelName);
      return response;
    },
  },
  Mutation: {
    generateResponse: async (_, { prompt }) => {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt,
        max_tokens: 150,
      });
      const responseData = response.data.choices[0].text.trim();
      

      return responseData;
    },
  },
};

module.exports = resolvers;


