const express = require("express");
const mongoose = require("mongoose");
const toDoHandler = require("./routeHandler/todoHandler");

const app = express();
app.use(express.json());

// Db connect with mongoose
mongoose.connection.on("connected", () => console.log("connected"));
mongoose.connection.on("open", () => console.log("open"));
mongoose.connection.on("disconnected", () => console.log("disconnected"));
mongoose.connection.on("reconnected", () => console.log("reconnected"));
mongoose.connection.on("disconnecting", () => console.log("disconnecting"));
mongoose.connection.on("close", () => console.log("close"));
mongoose
  .connect("mongodb://127.0.0.1:27017/todos")
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));

app.use("/todo", toDoHandler);

function errorHandler(err, req, res, next) {
  if (res.headerSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.listen(3000, () => console.log("listening to port 30000"));
//mongodb://localhost:27017/
