const PORT = 3000;
const express = require("express");
const app = express();
const adminRouter = express.Router();
const cookieParser = require("cookie-parser");
const fs = require("fs");

// fs.writeFileSync("myFile.txt", "Hello world");
// fs.appendFileSync(
//   "myFile.txt",
//   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus explicabo sunt error in. Voluptas dignissimos laudantium corrupti quas voluptatem alias perferendis fugit facere beatae aliquid iure laboriosam, provident, iusto vero error officia tempore? Distinctio, dolore. Cum eum dignissimos minus nemo rem dolor, suscipit autem libero nulla voluptates adipisci corporis neque facere deleniti dolores laudantium laboriosam id perferendis. Quia praesentium ipsa sed perspiciatis dolorum exercitationem non voluptatibus dolorem quod eveniet voluptatem deleniti quae dignissimos a atque laudantium rerum cum, odit aliquid vel maxime mollitia! Labore a quod sequi perspiciatis voluptatum soluta vitae expedita unde corporis, quam possimus odit ipsam dolore mollitia?"
// );

// const data = fs.readFileSync('myFile.txt')
// console.log(data.toString());

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
