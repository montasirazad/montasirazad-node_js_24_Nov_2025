const express = require("express");
const todoSchema = require("../schemas/todoSchema");
const { default: mongoose } = require("mongoose");

const router = express.Router();

const Todo = new mongoose.model("Todo", todoSchema);

// All todo
// get all to
router.get("/", async (req, res) => {
  try {
    const result = await Todo.find();
    console.log(result);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error._message);
  }
});

// single task
router.get("/:id", async (req, res) => {});
// single task

router.post("/", async (req, res) => {
  const newTodo = new Todo(req.body);
  try {
    const result = await newTodo.save();
    console.log(result);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error._message);
  }
});
// multiple task
router.post("/all", async (req, res) => {
  try {
    const result = await Todo.insertMany(req.body);
    console.log(result);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error._message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const result = await Todo.updateOne(
      { _id: req.params.id },
      {
        $set: {
          status: "active",
        },
      }
    );
    console.log(result);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error._message);
  }
});
// multiple task update
router.put("/", async (req, res) => {
  try {
    const result = await Todo.updateMany(
      {},
      {
        $set: {
          status: "inactive",
        },
      }
    );
    console.log(result);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error._message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await Todo.deleteOne({ _id: req.params.id });
    console.log(result);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error._message);
  }
});

module.exports = router;
