const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Model {
  id: String!
  object: String!
  created: Int!
  modelDetails: ModelDetails!
  owner: String!
  permissions: [String!]!
  ready: Boolean!
  trainingCost: Int!
  trainingStatus: TrainingStatus!
  displayName: String!
  description: String!
}

type ModelDetails {
  id: String!
  name: String!
  modelType: String!
  description: String!
  pretrainedModel: String!
  trainingDataset: String!
  trainingCost: Int!
  isAvailable: Boolean!
}

enum TrainingStatus {
  NOT_STARTED
  IN_PROGRESS
  SUCCEEDED
  FAILED
}

type Query {
  retrieveModel(modelName: String!): Model!
}

type Mutation {
  generateResponse(prompt: String!, model: String!, max_tokens: Int!): String!
}
`;



module.exports = typeDefs;

  
  