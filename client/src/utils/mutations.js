//  TODO: no clue if i did this right
import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $bookId: ID!
    $title: String!
    $authors: [Author]!
    $description: String!
    $image: Image!
    $link: Link!
  ) {
    saveBook(
      bookId: $bookID
      title: $title
      authors: $authors
      description: $description
      image: $image
      link: $link
    ) {
      user {
        _id
        username
      }
    }
  }
`;
