// External import
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
dotenv.config();

// Internal handler

const {
  notFoundHandler,
  errorHandler,
} = require("./middleware/common/errorHandler");

// db connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(err));

// req parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine

app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookies

app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup

// 404 not found handler
app.use(notFoundHandler);
// error handling
app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(`Listening to port : ${process.env.PORT}`)
);
