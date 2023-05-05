const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
  _id: ID
  email: String
  password: String
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

type Query {
  me: User
  users: [User]
  user(username: String!): User
  retrieveModel(modelName: String!): Model!
}

"create mutation for login not using auth yet" 

type Mutation {
  login(email: String!, password: String!): User
  addUser(email: String!, password: String!): User
  generateResponse(prompt: String!, model: String!, max_tokens: Int!): String
}
`;



module.exports = typeDefs;

  
  