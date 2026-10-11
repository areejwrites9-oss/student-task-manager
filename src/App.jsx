import { useState, useEffect } from "react";
import "./App.css";

// The address of our backend API
   const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/tasks";

function App() {
  const [title, setTitle] = useState("");   // what the user types
  const [tasks, setTasks] = useState([]);   // tasks that come from MongoDB
  const [error, setError] = useState("");   // message if something goes wrong

  // For editing a task
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  // ---------- 1. GET: fetch all tasks when the page opens ----------
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTasks(data);
      setError("");
    } catch (err) {
      setError("Cannot connect to the server. Is the backend running?");
    }
  };

  // ---------- 2. POST: add a new task ----------
  const handleAddTask = async () => {
    if (title.trim() === "") {
      setError("Please type a task first!");
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title }),
      });

      if (response.ok) {
        setTitle("");
        setError("");
        fetchTasks(); // refresh the list from the database
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (err) {
      setError("Cannot connect to the server. Is the backend running?");
    }
  };

  // ---------- 3. DELETE: remove a task ----------
  const handleDeleteTask = async (id) => {
    try {
      await fetch(API_URL + "/" + id, { method: "DELETE" });
      fetchTasks(); // refresh the list from the database
    } catch (err) {
      setError("Could not delete the task.");
    }
  };

  // ---------- 4. PUT: edit a task ----------
  const handleStartEdit = (task) => {
    setEditingId(task._id);
    setEditText(task.title);
  };

  const handleSaveEdit = async (id) => {
    if (editText.trim() === "") {
      setError("Task title cannot be empty.");
      return;
    }

    try {
      const response = await fetch(API_URL + "/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: editText }),
      });

      if (response.ok) {
        setEditingId(null);
        setEditText("");
        setError("");
        fetchTasks();
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (err) {
      setError("Could not update the task.");
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  // ---------- 5. PATCH (bonus): mark done / not done ----------
  const handleToggleTask = async (id) => {
    try {
      await fetch(API_URL + "/" + id, { method: "PATCH" });
      fetchTasks();
    } catch (err) {
      setError("Could not update the task.");
    }
  };

  // Keyboard shortcuts
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  const handleEditKeyDown = (e, id) => {
    if (e.key === "Enter") {
      handleSaveEdit(id);
    } else if (e.key === "Escape") {
      handleCancelEdit();
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="heading">Student Task Manager</h1>

        <div className="input-section">
          <input
            type="text"
            className="task-input"
            placeholder="Enter task title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="add-btn" onClick={handleAddTask}>
            Add Task
          </button>
        </div>

        {error !== "" && <p className="error-message">{error}</p>}

        {tasks.length === 0 ? (
          <p className="empty-message">No tasks available. Add your first task!</p>
        ) : (
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task._id} className="task-item">
                {editingId === task._id ? (
                  // ----- EDIT MODE -----
                  <>
                    <input
                      type="text"
                      className="edit-input"
                      value={editText}
                      autoFocus
                      onChange={(e) => setEditText(e.target.value)}
                      onKeyDown={(e) => handleEditKeyDown(e, task._id)}
                    />
                    <div className="button-group">
                      <button
                        className="save-btn"
                        onClick={() => handleSaveEdit(task._id)}
                      >
                        Save
                      </button>
                      <button className="cancel-btn" onClick={handleCancelEdit}>
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  // ----- NORMAL MODE -----
                  <>
                    <div className="task-left">
                      <input
                        type="checkbox"
                        className="task-checkbox"
                        checked={task.completed}
                        onChange={() => handleToggleTask(task._id)}
                      />
                      <span
                        className={
                          task.completed ? "task-title task-done" : "task-title"
                        }
                      >
                        {task.title}
                      </span>
                    </div>
                    <div className="button-group">
                      <button
                        className="edit-btn"
                        onClick={() => handleStartEdit(task)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDeleteTask(task._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;