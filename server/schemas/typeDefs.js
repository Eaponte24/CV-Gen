const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
  _id: ID
  email: String
  password: String
  coverLetterCount: Int
}


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

type Auth {
    token: ID!
    user: User
  }

type Query {
  me: User
  users: [User]
  user(username: String!): User
  retrieveModel(modelName: String!): Model!
}

"created mutations using auth now"

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(email: String!, password: String!): Auth
  generateResponse(prompt: String!, model: String!, max_tokens: Int!): String
  addCoverletterCount(email: String!): User
}
`;



module.exports = typeDefs;

  
  