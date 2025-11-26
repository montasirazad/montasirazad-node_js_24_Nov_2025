const express = require("express");

const app = express();
const adminRoute = express();
app.use(express.json());
app.use("/admin", adminRoute);
const port = 3000;

app.get("/", (req, res) => {
  res.send("This is homepage");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

adminRoute
  .route("/user")
  .get((req, res) => {
    console.log(req.ip);
    res.send("admin get route");
  })
  .post((req, res) => {
    res.send("admin post route");
  })
  .put((req, res) => {
    res.send("admin put route");
  });

app.listen(port, () => console.log(`Listening to port ${port}`));
