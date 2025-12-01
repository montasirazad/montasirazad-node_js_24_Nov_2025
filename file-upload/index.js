const express = require("express");
const multer = require("multer");
const UPLOADS_FOLDER = "./uploads/";
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_FOLDER);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const fileName = file.originalname
      .replace(fileExt, "")
      .toLocaleLowerCase()
      .split(" ")
      .join("-");
    cb(null, fileName + fileExt);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000,
  },
  fileFilter: (req, file, cb) => {
    //console.log(file);
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("only jpg is allowed"));
    }
  },
});
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/", upload.single("avatar"), (req, res) => {
  res.send("uploaded");
});

app.use((err, req, res, next) => {
  if (err) {
    //console.log(err);
    if (err instanceof multer.MulterError) {
      res.status(500).send(err.message);
    }
    // else {
    //   res.status(500).send(err.message);
    // }
  } else {
    res.send("success");
  }
});

app.listen(3000, () => console.log("Listening to port 3000"));
