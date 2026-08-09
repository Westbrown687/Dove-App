export function AddTask({ onClose }) {
  return (
    <aside className="add-task-panel">
      <div className="add-task-header">
        <h2>Add New Task</h2>

        <button onClick={onClose}>×</button>
      </div>

      <div className="add-task-form">
        <label htmlFor="task">Task</label>

        <input id="task" type="text" placeholder="What needs to be done?" />

        <label htmlFor="description">Description</label>

        <textarea id="description" placeholder="Add a description..." />

        <label htmlFor="dueDate">Due date</label>

        <input id="dueDate" type="date" />

        <label htmlFor="priority">Priority</label>

        <select id="priority">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <div className="task-actions">
          <button onClick={onClose}>Cancel</button>

          <button>Add Task</button>
        </div>
      </div>
    </aside>
  );
}
