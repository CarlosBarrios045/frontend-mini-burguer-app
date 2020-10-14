import { gql } from "@apollo/client";

// Login
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

// Get user logged
export const GET_USER_LOGGED = gql`
  mutation {
    getUserLogged {
      name
      lastname
      email
      role
      id
    }
  }
`;

// Create User
export const SIGNUP = gql`
  mutation createUser($input: UserInput) {
    createUser(input: $input) {
      name
      lastname
    }
  }
`;

// Get Products
export const GET_PRODUCTS = gql`
  query products($where: JSON) {
    products(where: $where) {
      id
      name
      price
      count
      categories {
        category
      }
      image {
        url
      }
      descuent
      have_descuent
    }
  }
`;

// Get User
export const GET_CATEGORIES = gql`
  query {
    categories {
      id
      category
    }
  }
`;
