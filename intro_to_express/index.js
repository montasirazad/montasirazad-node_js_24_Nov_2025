const express = require("express");
const handle = require("./hadleLoacal");

const app = express();
const admin = express();
app.use(express.json());
app.set("view engine", "ejs");
// const myApp = (app.locals.title = "my_app");

app.get("/render", (req, res) => {
  res.render("index");
});
app.all("/all", (req, res) => {
  res.send("open route");
});

app.get("/user/:id", (req, res) => {
  console.log(req.newUser);
  res.send("The route is /user/:id");
});

app.param("id", (req, res, next, id) => {
  const user = {
    userID: id,
    name: `user_${id}`,
  };
  req.newUser = user;
  next();
});
app.get("/", handle);

app.use("/admin", admin);

admin.get("/dashboard", (req, res) => {
  console.log(admin.mountpath);
  res.send("welcome to admin dashboard");
});

app.post("/", (req, res) => {
  console.log(typeof req.body);
  res.send("This is homepage with post request");
});

app.listen(3000, () => console.log("listening to port 3000"));
