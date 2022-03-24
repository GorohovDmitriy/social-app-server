const UserList = require("../../db");
const _ = require("lodash");

module.exports = {
  createUser: (parent, args) => {
    const user = args.input;
    user.id = Date.now();
    UserList.push(user);

    return user;
  },

  updateUser: (parent, args) => {
    const { id, newFirstName, newLastName, newImage, newPosition } = args.input;
    let userUpdate;

    UserList.forEach((user) => {
      if (user.id === Number(id)) {
        user.firstName = newFirstName;
        user.lastName = newLastName;
        user.position = newPosition;
        user.image = newImage;

        userUpdate = user;
      }
    });

    return userUpdate;
  },
};
