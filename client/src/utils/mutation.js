import {gql} from '@apollo/client';

export const GEN_RESPONSE = gql`
    mutation generateResponse($prompt: String!, $model: String!, $maxTokens: Int!) {
        generateResponse(prompt: $prompt, model: $model, max_tokens: $maxTokens)
    }
`;

