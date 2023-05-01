const { Configuration, OpenAIApi } = require("openai");
const {User} = require('../models');
require("dotenv").config();


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const resolvers = {

Query: {
  
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id });
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },

    users: async () => {
      return User.find();
    },

    user: async (parent, { username }) => {
       const params = username ? { username } : {};
        return User.find(params);
    },

    retrieveModel: async (_, { modelName }) => {
      const response = await openai.retrieveModel(modelName);
      return response;
    },
  },


  Mutation: {

    addUser: async (parent, args ) => {
      const user = await User.create(args);
      return user;
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      return user;
    },

    generateResponse: async (_, { prompt }) => {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt,
        max_tokens: 1100,
      });
      const responseData = response.data.choices[0].text.trim();
      

      return responseData;
    },
  },
};

module.exports = resolvers;


