const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  organization: "org-VK1LXa6UAEixm2T3aqAkk2f7",
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);


const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const context = {
      req,
      openai
    };

    // Apply authMiddleware
    await authMiddleware(context);

    return context;
  },
  introspection: process.env.NODE_ENV !== 'production',
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const startServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

startServer(typeDefs, resolvers);