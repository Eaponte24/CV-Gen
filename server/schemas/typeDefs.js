const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    generateResponse(prompt: String!, length: Int!): String!
  }
`;

module.exports = typeDefs;

  
  