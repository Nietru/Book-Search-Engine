//  TODO:
import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      password
      savedBooks {
        bookId
        title
        [Author]
        description
        Image
        link
      }
    }
  }
`;
