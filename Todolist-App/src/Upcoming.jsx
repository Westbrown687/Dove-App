import "./upcoming.css";

export function Upcoming() {
  return (
    <>
      <section className="date-con">
        <div className="upcoming-text">Upcoming</div>
        <div className="date">
          <button className="date-button">12</button>
        </div>
      </section>

      <section className="tasks-section">
        <button className="newtask-con">
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
    </>
  );
}
