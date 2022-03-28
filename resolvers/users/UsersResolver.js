const axios = require("axios");

module.exports = {
  users: async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/users");

      return data;
    } catch (err) {
      console.log(err);
    }
  },
};
