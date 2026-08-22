import { useState } from "react";
import "./upcoming.css";

export function Upcoming({ onAddTask }) {
  return (
    <>
      <section className="upcoming-date-con">
        <div className="upcoming-text">
          <span>Upcoming</span>
        </div>
        <div className="upcoming-quantity">
          <span>12</span>
        </div>
      </section>

      <section className="upcoming-tasks-section">
        <div className="today-text">Today</div>
        <button onClick={onAddTask} className="newtask-con">
          <img className="plus-img" src="/images/plus-alt.svg" alt="Add" />
          <span>Add New task</span>
        </button>

        <div className="activities-container">
          <div className="activity-item">
            <input type="checkbox" />
            <span>Research Content Ideas</span>
          </div>

          <div className="activity-item">
            <input type="checkbox" />
            <span>Create a database of guest authors</span>
          </div>

          <div className="activity-box">
            <div>
              <input type="checkbox" />
              <span>Renew driver's license</span>
            </div>

            <button className="trash-button">
              <img className="trash" src="/images/trash.svg" alt="Delete" />
              <span>22-08-26</span>
            </button>
          </div>

          <div className="activity-item">
            <input type="checkbox" />
            <span>Consult accountant</span>
          </div>
        </div>
      </section>
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
    </>
  );
}
