const UsersResolver = require("./UsersResolver");

module.exports = {
  Query: {
    ...UsersResolver,
  },
};
