const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const updatedName =
      file.originalname
        .replace(fileExt, "")
        .toLocaleLowerCase()
        .split(" ")
        .join("_") + "new";
    cb(null, updatedName + fileExt);
  },
});

const upload = multer({
  storage: storage,
  limits: 10000000,

  fileFilter: (req, file, cb) => {
    console.log(file);
    cb(null, true);
  },
});

app.get("/", (req, res) => {
  res.send("Hello from index_4.js");
});

app.post("/", upload.array("avatar", 2), (req, res) => {
  res.send("success");
});
app.listen(3000, () => console.log("listening to port 3000"));
