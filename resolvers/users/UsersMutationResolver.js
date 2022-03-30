const { getDocs, addDoc } = require("firebase/firestore");
const Users = require("../../firebase/config");

module.exports = {
  createUser: async (parent, args) => {
    const user = args.input;
    await addDoc(Users, user);

    return user;
  },
};
