import { gql } from "@apollo/client";

// Define the GraphQL mutation
export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $password: String!, $email: String!) {
    createUser(name: $name, password: $password, email: $email)
  }
`;

export const LOGIN_USER = gql`
mutation LoginUser($email: String!, $password: String!) {
    LoginUser(email: $email, password: $password)
  }
  
`