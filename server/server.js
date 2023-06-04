const express = require("express");
const path = require("path");
const db = require("./config/connection");
const { ApolloServer } = require("apollo-server-express");
const { authMiddleware } = require("./utils/auth");

const { typeDefs, resolvers } = require("./schemas");

const app = express();
const PORT = process.env.PORT || 5000;

// Comment out this code once you have built out queries and mutations in the client folder
// const routes = require("./routes");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// New instance of apollo server
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  // db accesses our models via mongoose ./config/connection.js
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Uncomment the following code once you have built the queries and mutations in the client folder
startApolloServer();
