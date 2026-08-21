import "./today.css";
import { FaChevronRight } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import supabaseApi from "./services/supabaseApi";

export function Today({ onAddTask, refreshTask, taskDelete }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await supabaseApi.get("/tasks");

        setTasks(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getTasks();
  }, [refreshTask]);

  const deleteTask = async (taskId) => {
    try {
      await supabaseApi.delete(`/tasks?id=eq.${taskId}`);

      console.log("Task deleted");

      taskDelete();
    } catch (error) {
      console.error("Delete error:", error.response?.data);
    }
  };
  return (
    <>
      <title>Dove App</title>

      <section className="date-con">
        <div className="today">Today</div>
        <div className="date">
          <button className="date-button">5</button>
        </div>
      </section>

      <section className="tasks-section">
        <button onClick={onAddTask} className="today-newtask-con">
          <img className="plus-img" src="/images/plus-alt.svg" alt="Add" />
          <span>Add New task</span>
        </button>

        <div className="today-activities-container">
          {tasks.map((task) => {
            return (
              <div key={task.id} className="activity-item">
                <div className="activity-main">
                  <div className="activity-title">
                    <input type="checkbox" checked={task.is_completed} />
                    <span>{task.title}</span>
                  </div>

                  <div className="task-description">
                    <span>Description: {task.description}</span>
                  </div>
                </div>
                <div className="task-details">
                  <span className={`priority ${task.priority}`}>
                    Priority: {task.priority}
                  </span>
                  <span className="task-date">Due: {task.due_date}</span>
                  <button
                    className="delete-button"
                    onClick={() => {
                      deleteTask(task.id);
                    }}
                  >
                    <FaTrash />
                  </button>
                </div>

                <button className="greaterthan">
                  <FaChevronRight />
                </button>
              </div>
            );
          })}
          {/*
          <div className="activity-item">
            <input type="checkbox" />
            <span>Research Content Ideas</span>
            <button className="greaterthan">
              <FaChevronRight />
            </button>
          </div>
          <div className="activity-item">
            <input type="checkbox" />
            <span>Create a database of guest authors</span>
            <button className="greaterthan">
              <FaChevronRight />
            </button>
          </div>
          <div className="today-activity-box">
            <div>
              <input type="checkbox" />
              <span>Renew driver's license</span>
            </div>
            <button className="greaterthan">
              <FaChevronRight />
            </button>
            <button className="trash-button">
              <img className="trash" src="/images/trash.svg" alt="Delete" />
              <span>22-08-26</span>
            </button>
          </div>
          <div className="activity-item">
            <input type="checkbox" />
            <span>Consult accountant</span>
            <button className="greaterthan">
              <FaChevronRight />
            </button>
          </div>
          <div className="activity-item">
            <input type="checkbox" />
            <span>Print business card</span>
            <button className="greaterthan">
              <FaChevronRight />
            </button>
          </div>
          */}
        </div>
      </section>
    </>
  );
}
