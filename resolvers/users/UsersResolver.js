const UserList = require("../../db");

module.exports = {
  users: () => {
    return UserList;
  },
};
