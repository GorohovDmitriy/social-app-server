const { Users } = require("../Firebase/config");
const { getDocs, addDoc } = require("firebase/firestore");

class UsersController {
  async createUser(req, res) {
    const data = req.body;

    await addDoc(Users, data);
    res.send({ lastName: data.lastName });

    return data;
  }

  async getUsers(req, res) {
    const data = await getDocs(Users);
    const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    res.send(users);

    return users;
  }
}

module.exports = new UsersController();
