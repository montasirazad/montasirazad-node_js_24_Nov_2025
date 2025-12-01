const express = require("express");
const multer = require("multer");
const path = require("path");
const UPLOAD_FOLDER = "./uploads/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_FOLDER);
  },
  filename: (req, file, cb) => {
    const random = new Date();
    const fileExt = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExt, "")
        .toLocaleLowerCase()
        .split(" ")
        .join("_") +
      "_" +
      Date.now().toLocaleString();
    cb(null, fileName + fileExt);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10000000,
  },
  fileFilter: (req, file, cb) => {
    console.log(file);
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "application/pdf"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only jpg and png is allowed"));
    }
  },
});

const app = express();

app.get("/", (req, res) => {
  console.log(new Date());
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
    console.log(err);
    res.send(err.message);
  }
});

app.listen(3000, () => console.log("Listening to port 3000"));
