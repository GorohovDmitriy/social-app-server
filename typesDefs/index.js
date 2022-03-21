const { gql } = require("apollo-server");

const typesDefs = gql`
  type User {
    id: ID
    name: String
    email: String
  }

  type Query {
    users: [User]
  }
`;

module.exports = typesDefs;
