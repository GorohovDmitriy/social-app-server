const UserList = require("../../db");
const _ = require("lodash");

module.exports = {
  users: () => {
    return UserList;
  },

  user: (parent, args) => {
    const user = _.find(UserList, { id: Number(args.id) });
    return user;
  },
};
