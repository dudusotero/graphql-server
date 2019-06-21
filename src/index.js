const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");

const { PORT, DB_USER, DB_PASSWD } = process.env;
const schema = require("./schema");

const app = express();

app.use(cors());

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWD}@cluster0-tnxsc.mongodb.net/test?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true
  }
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT || 4000, () => {
  console.log(`now listening for requests on port ${PORT || 4000}`);
});
