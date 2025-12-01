const express = require("express");
const multer = require("multer");
const UPLOAD_FOLDER = "./uploads/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_FOLDER);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10000000,
  },
});

const app = express();

app.get("/", (req, res) => {
  res.send("hello world .....!!!!!!");
});

app.post(
  "/",
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "more",
      maxCount: 2,
    },
  ]),
  (req, res) => {
    res.send("Uploaded successfully");
  }
);

app.use((err, req, res, next) => {
  if (err) {
    res.send(err.message);
  }
});

app.listen(3000, () => console.log("Listening to port 3000"));
