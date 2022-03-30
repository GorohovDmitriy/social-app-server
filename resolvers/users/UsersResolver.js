const Users = require("../../firebase/config");
const { getDocs } = require("firebase/firestore");

module.exports = {
  users: async () => {
    const data = await getDocs(Users);

    const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return users;
  },
};
