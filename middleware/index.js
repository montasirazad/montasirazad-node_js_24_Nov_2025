const PORT = 3000;
const express = require("express");
const app = express();
const adminRouter = express.Router();
const cookieParser = require("cookie-parser");

const myMiddleware = (req, res, next) => {
  console.log("I am logging");
  next();
};

const logger = (req, res, next) => {
  console.log(`${req.method} -- ${new Date(Date.now()).toLocaleString()}`);
  //throw new Error('There is an error')
};

app.use(cookieParser());
app.use("/admin", adminRouter);
//app.use(logger);
app.use(myMiddleware);
adminRouter.use(logger);

adminRouter.get("/dashboard", (req, res) => {
  res.send("Dashboard");
});

app.get("/about", (req, res) => {
  res.send(`This is about page and method is ${req.method}`);
});

const errorMiddleware = (err, req, res, next) => {
  console.log(err);
  res.status(500).send("server side error");
};

adminRouter.use(errorMiddleware);
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
