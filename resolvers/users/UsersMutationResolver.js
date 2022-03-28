const axios = require("axios");

module.exports = {
  createUser: async (parent, args) => {
    try {
      const values = args.input;

      await axios.post("http://localhost:5000/users/create", values);

      return {
        ...values,
        id: Date.now(),
      };
    } catch (error) {
      console.log(error);
    }
  },
};
