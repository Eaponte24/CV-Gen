import { gql } from '@apollo/client';

export const GEN_RESPONSE = gql`
  mutation generateResponse($prompt: String!, $model: String!, $max_tokens: Int!) {
    generateResponse(prompt: $prompt, model: $model, max_tokens: $max_tokens)
  }
`;

