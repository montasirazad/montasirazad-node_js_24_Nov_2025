const express = require("express");
const handleRoute = require("./utils/handleRoute");
const app = express();
const admin = express();
app.locals.name = "Express";
app.enable("case sensitive routing");
app.use("/admin", admin);

admin.locals.title = "Admin";
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    `app with route "http://localhost:${port}"---case sensitive routing`
  );
});

app.param("id", (req, res, next, id) => {
  const userDetails = {
    userId: id,
    name: "John",
  };
  req.userDetails = userDetails;
  next();
});

app.get("/user/:id", (req, res) => {
  console.log(req.userDetails);
  res.send(req.userDetails);
});

app.get("/case", (req, res) => {
  //console.log(app.enabled('case sensitive routing'));
  res.send("/case route");
});

admin.get("/page", (req, res) => {
  //console.log(admin.mountpath);
  //console.log(admin.enabled('case sensitive routing'));
  res.send("This is admin route page");
});

admin.all("/all", (req, res) => {
  res.send("all route");
});

app.listen(port, () => console.log(`Listening to port: ${port}`));

//** app object
// app.route
// app.methods
// app.post
// sub app of main App
// app.params
// app.locals */
