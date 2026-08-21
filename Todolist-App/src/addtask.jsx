import "./addtask.css";
import { useState } from "react";
import supabaseApi from "./services/supabaseApi";

export function AddTask({ onClose, onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("low");

  const addTask = async () => {
    try {
      const response = await supabaseApi.post("/tasks", {
        title: title,
        description: description,
        due_date: dueDate || null,
        priority: priority,
        is_complete: false,
      });

      console.log(response.data);

      onTaskAdded();
      onClose();
    } catch (error) {
      console.error("Full error:", error);
      console.error("Supabase error:", error.response?.data);
    }
  };
  return (
    <aside className="add-task-panel">
      <div className="add-task-header">
        <h2>Add New Task</h2>

        <button onClick={onClose}>×</button>
      </div>

      <div className="add-task-form">
        <div>
          <label htmlFor="task">Task</label>

          <input
            id="task"
            type="text"
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Add a description..."
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="dueDate">Due date</label>
          <input
            id="dueDate"
            type="date"
            value={dueDate}
            onChange={(e) => {
              setDueDate(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => {
              setPriority(e.target.value);
            }}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="task-actions">
          <button onClick={onClose}>Cancel</button>

          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
    </aside>
  );
}
