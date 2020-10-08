// requiring dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

// specifying which port the app should use
const PORT = process.env.PORT || 3000;

// setting up new instance of express
const app = express();

// middleware for morgan/collecting request logs
app.use(logger("dev"));

// middleware for compressing files and recognizing request object
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// folder used for client
app.use(express.static("public"));

// syncing database with mongoose

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

// setting up to alert user that port is listening successfully
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});