const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const devs = require("./routes/devs");

// config
const app = express();
const port = process.env.PORT || 3001;

mongoose
  .connect("mongodb://localhost/github-tracker-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(() => console.log("Connected to the database..."))
  .catch((err) => {
    console.log("Could not connect to the database...");
  });

// middleware
app.use(morgan("common"));
app.use(express.json());
app.use(helmet());
app.use(cors());

// routes
app.use(devs);

// listening
app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}...`);
});
