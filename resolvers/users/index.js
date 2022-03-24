const UsersResolver = require("./UsersResolver");
const UsersMutationResolver = require("./UsersMutationResolver");

module.exports = {
  Query: {
    ...UsersResolver,
  },
  Mutation: {
    ...UsersMutationResolver,
  },
};
