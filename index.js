const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typesDefs");
const resolvers = require("./resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`
      🚀  Server is ready at ${url}
    `);
});
