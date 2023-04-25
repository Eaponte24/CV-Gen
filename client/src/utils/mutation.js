import {gql} from '@apollo/client';

export const GEN_RESPONSE = gql`
    mutation generateResponse($prompt: String!) {
        generateResponse(prompt: $prompt) 
    }
`;

