const { ApolloServer } = require("apollo-server");
const express = require("express");
const cors = require("cors");
const typeDefs = require("./typesDefs");
const resolvers = require("./resolvers");
const usersRoute = require("./router/Users");
const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", usersRoute);

app.listen(PORT, (req, res) => {
  console.log(`Server is running for PORT http://localhost:${PORT}/`);
});

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`
      🚀  Server is ready at ${url}
    `);
});
