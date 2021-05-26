const express = require("express");
const db = require("./config/connection.js");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT} 🌏`);
    // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
