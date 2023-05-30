import { gql } from '@apollo/client';

export const GEN_RESPONSE = gql`
  mutation generateResponse($prompt: String!, $model: String!, $max_tokens: Int!) {
    generateResponse(prompt: $prompt, model: $model, max_tokens: $max_tokens)
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        email
        password
      
    }
  }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
          email
          password
    }
  }
  }
`;

export const ADD_COVERLETTER_COUNT = gql`
  mutation addCoverletterCount($email: String!) {
    addCoverletterCount(email: $email) {
      email
      coverLetterCount
    }
  }
`;



