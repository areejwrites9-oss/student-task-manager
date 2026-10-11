// ---------------------------------------------
// Student Task Manager - Backend (Express + MongoDB)
// ---------------------------------------------

// 1. Bring in the tools we need
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // reads the .env file

// 2. Create the server
const app = express();
app.use(cors());         // lets the React app talk to this server
app.use(express.json()); // lets the server read JSON sent by React

// 3. Describe what a Task looks like in the database
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  completed: { type: Boolean, default: false }, // bonus: done or not done
});

const Task = mongoose.model("Task", taskSchema);

// 4. Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("MongoDB connection failed:", error.message));

// ---------------------------------------------
// API ROUTES
// ---------------------------------------------

// GET  /api/tasks  -> get all tasks
app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Could not get tasks" });
  }
});

// POST /api/tasks  -> add a new task
app.post("/api/tasks", async (req, res) => {
  try {
    const title = req.body.title;

    // Validation: no empty tasks allowed
    if (!title || title.trim() === "") {
      return res.status(400).json({ message: "Task title cannot be empty" });
    }

    const newTask = await Task.create({ title: title.trim() });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Could not add task" });
  }
});

// DELETE /api/tasks/:id  -> delete a task using its id
app.delete("/api/tasks/:id", async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    res.status(400).json({ message: "Invalid task id" });
  }
});

// PATCH /api/tasks/:id  -> BONUS: mark a task done / not done
app.patch("/api/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.completed = !task.completed; // flip true <-> false
    await task.save();
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ message: "Invalid task id" });
  }
});
// PUT /api/tasks/:id  -> edit a task title
app.put("/api/tasks/:id", async (req, res) => {
  try {
    const title = req.body.title;

    // Validation: no empty titles allowed
    if (!title || title.trim() === "") {
      return res.status(400).json({ message: "Task title cannot be empty" });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title: title.trim() },
      { new: true } // give back the updated task
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: "Invalid task id" });
  }
});

// 5. Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
