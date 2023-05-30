const { Configuration, OpenAIApi } = require("openai");
const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const resolvers = {
  Query: {
    me: async (_, __, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id });
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },

    users: () => {
      return User.find();
    },

    user: (_, { username }) => {
      const params = username ? { username } : {};
      return User.find(params);
    },

    retrieveModel: async (_, { modelName }) => {
      const response = await openai.retrieveModel(modelName);
      return response;
    },
  },

  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
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

    addCoverletterCount: async (_, __, { user }) => {
      if (!user) {
        throw new Error('Authentication required');
      }
    
      const updatedUser = await User.findOneAndUpdate(
        { email: user.email },
        { $inc: { coverLetterCount: 1 } },
        { new: true }
      );
    
      return updatedUser;
    },
  },   
};

module.exports = resolvers;
