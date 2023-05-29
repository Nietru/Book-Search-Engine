const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [bookSchema]!
  }

  type Book {
    bookId: ID
    authors: [Author]!
    description: String
    title: String
    image: Image
    link: Link
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(
      authors: [Author]!
      description: String!
      title: String!
      bookId: ID!
      image: Image!
      link: Link!
    ): Input
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
