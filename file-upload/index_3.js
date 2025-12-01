const express = require("express");
const path = require("path");
const app = express();
const multer = require("multer");
const FOLDER_DEST = "./uploads/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, FOLDER_DEST);
  },
  filename: (req, file, cb) => {
    const extName = path.extname(file.originalname);
    const fileName =
      file.originalname.replace(extName, "").toLowerCase().split().join("_") +
      crypto.randomUUID();

    cb(null, fileName + extName);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 10000000,
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Wrong file format"));
    }
  },
});

app.get("/", (req, res) => {
  res.send("Hello from index_3.js");
});

app.post("/", upload.single("avatar"), (req, res) => {
  res.send(`File uploaded`);
});

app.use((err, rec, res, next) => {
  if (err) {
    if (err instanceof multer.MulterError) {
      res.status(500).send("There is an error");
    } else {
      res.status(500).send(err.message);
    }
  } else {
    res.send("success");
  }
});
app.listen(3000, () => {
  console.log("Listening to port 3000");
});


//** field control
// file type 
// limits
//  */