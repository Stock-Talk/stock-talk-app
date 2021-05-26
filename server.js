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

// app.listen(PORT, () => {
//   console.log("RUNNING 🌏");
// });

/**
 * nodemailer -> email node package, so when users send their data, POST request storing what the user sent to you and sends the context of the form to you via email
 * using transporter (a part of nodemailer)
 * whenever people visit you, post saves name -email - message
 * we have one or 2 post routes
 * maybe a get route to post whomever visited on a page
 */
