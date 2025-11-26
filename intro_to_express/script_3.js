const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) =>
  res.send("This is home page and listening to port " + PORT)
);

app
  .route("/about")
  .get((req, res) => res.send(`This is about page and method is ${req.method}`))
  .post((req, res) =>
    res.send(`This is about page and method is ${req.method}`)
  )
  .put((req, res) =>
    res.send(`This is about page and method is ${req.method}`)
  );

app.param("id", (req, res, next, id) => {
  const user = {
    id,
    name: "john",
  };

  req.user = user;
  next();
});

app.get("/user/:id", (req, res) => {
    console.log(req.params);
  res.send(req.user);
});

app.listen(PORT, () => console.log(`Listening to port : ${PORT}`));
