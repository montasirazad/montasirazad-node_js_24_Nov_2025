const express = require("express");
const PORT = 3000;
const app = express();
app.use(express.json());
const cookieParser = require("cookie-parser");
const handler = require("./handler");
app.use(cookieParser());
const adminRoute = express.Router();

adminRoute.get("/dashboard", (req, res) => {
  console.log(req.baseUrl);
  res.send("this is admin dashboard");
});

app.use("/admin", adminRoute);
app.get("/", handler);

app.get("/user/:id", (req, res) => {
  console.log(req.path);
  res.send(`This is user running on port ${PORT}`);
});
app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.cookies);
  res.send("post route");
});
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));

//**
// 1.  baseUrl()
// 2.  originalURl
// 3.  path
// 4.  hostname
// 5.  ip
// 6.  method
// 7.  protocol
// 8.  params
// 9.  body
// 10. cookies*/
