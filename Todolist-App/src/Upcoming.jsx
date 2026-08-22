import { useState } from "react";
import "./upcoming.css";
import { FaChevronRight, FaTrash } from "react-icons/fa";
import { useTasks } from "./hooks/useTasks";

export function Upcoming({ onAddTask, refreshTask }) {
  const { tasks, loading } = useTasks(refreshTask);

  return (
    <>
      <section className="upcoming-date-con">
        <div className="upcoming-text">
          <span>Upcoming</span>
        </div>

        <div className="upcoming-quantity">
          <span>{tasks.length}</span>
        </div>
      </section>

      <section className="upcoming-tasks-section">
        <div className="today-text">Today</div>

        <button onClick={onAddTask} className="newtask-con">
          <img className="plus-img" src="/images/plus-alt.svg" alt="Add" />
          <span>Add New task</span>
        </button>

        <div className="activities-container">
          {loading ? (
            <p>Loading tasks...</p>
          ) : (
            tasks.map((task) => (
              <div key={task.id} className="activity-item">
                <div className="activity-main">
                  <div className="activity-title">
                    <input
                      type="checkbox"
                      checked={task.is_completed}
                      readOnly
                    />

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
                    onClick={() => deleteTask(task.id)}
                  >
                    <span>Delete</span>
                    <FaTrash />
                  </button>
                </div>

                <button className="greater-than">
                  <FaChevronRight />
                </button>
              </div>
            ))
          )}
        </div>
      </section>

      {/*
       <div className="future-tasks-section">
        <section className="tomorrow-tasks-section">
          <div className="today-text">Tomorrow</div>
          <button className="newtask-cons">
            <img className="plus-img" src="/images/plus-alt.svg" alt="Add" />
            <span>Add New task</span>
          </button>

          <div className="activities-container">
            <div className="activity-items">
              <input type="checkbox" />
              <span>Create job posting for SEO specialist</span>
            </div>

            <div className="activity-items">
              <input type="checkbox" />
              <span>Request design asset for land page</span>
            </div>
          </div>
        </section>

        <section className="thisweek-tasks-section">
          <div className="today-text">This Week</div>
          <button className="newtask-cons">
            <img className="plus-img" src="/images/plus-alt.svg" alt="Add" />
            <span>Add New task</span>
          </button>

          <div className="activities-container">
            <div className="activity-items">
              <input type="checkbox" />
              <span>Research Content Ideas</span>
            </div>

            <div className="activity-items">
              <input type="checkbox" />
              <span>Create a database of guest authors</span>
            </div>
          </div>
        </section>
      </div>
*/}
    </>
  );
}
