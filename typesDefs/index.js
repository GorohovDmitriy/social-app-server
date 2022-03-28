const { gql } = require("apollo-server");

const typesDefs = gql`
  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    position: String
    image: String
    isAuth: Boolean
  }

  type Query {
    users: [User]
    user(id: ID): User
  }

  input CreateUserInput {
    firstName: String
    lastName: String
    email: String
    password: String
    position: String
    image: String
    isAuth: Boolean
  }

  input UpdateUserInput {
    id: ID
    newFirstName: String
    newLastName: String
    newPosition: String
    newImage: String
  }

  type Mutation {
    createUser(input: CreateUserInput): User
    updateUser(input: UpdateUserInput): User
  }
`;

module.exports = typesDefs;
