const { gql } = require('apollo-server-express');

const typeDefs = gql`

 type Prompt {
    id: ID!
    prompt: String!
  }

  type Query {
    generateResponse(prompt: String!, length: Int!): String!
  }

  type Mutation {
    sendPrompt(prompt: String!): Prompt!
  }
`;



module.exports = typeDefs;

  
  