// TODO: https://www.apollographql.com/docs/apollo-server/api/express-middleware/

// TODO: ⚠️ Wrap this in a function that we can call from `./index.js` to start the server
import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { typeDefs, resolvers } from "./graphql/index.js";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import bodyParser from "body-parser";

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Note you must call `server.start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`
await server.start();

// Specify the path where we'd like to mount our server
app.use("/", cors(), json(), express.json(), expressMiddleware(server));

async function init() {
  // Note you must call `server.start()` on the `ApolloServer`
  // instance before passing the instance to `expressMiddleware`
  await server.start();

  // Specify the path where we'd like to mount our server
  app.use("/graphql", cors(), express.json(), expressMiddleware(server));
}

// Modified server startup
await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

console.info(`🚀 Server ready at http://localhost:4000/`);

export default init;
