import "./homepage.css";
import { FaSearch } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { HiCalendar } from "react-icons/hi";

export function HomePage() {
  return (
    <>
      <title>Dove App</title>
      <div className="app-container">
        <aside className="side-bar">
          <div className="todo-menu">
            <div className="menu-text">Menu</div>
            <button className="menu-button">
              <img
                className="menuimg"
                src="/images/navigation-button.svg"
                alt="Navigation"
              />
            </button>
          </div>

          <div className="search-container">
            <FaSearch className="search-icon" />
            <input className="search" type="text" placeholder="Search" />
          </div>
          <div>
            <div className="tasks">TASK</div>
            <div>
              <div className="upcoming-con">
                <FaChevronRight className="chevron-right" />
                <button className="upcoming-button">Upcoming</button>
                <button className="upcoming-digit">12</button>
              </div>
              <div className="today-con">
                <HiBars3 className="hibar" />
                <button className="today-button">Today</button>
                <button className="today-digit">5</button>
              </div>
              <div className="calender-con">
                <HiCalendar className="calender" />
                <button className="calender-button">Calender</button>
              </div>
            </div>
          </div>
        </aside>

        <main className="body-content">
          <section className="date-con">
            <div className="today">Today</div>
            <div className="date">
              <button className="date-button">5</button>
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

              <div className="activity-item">
                <input type="checkbox" />
                <span>Print business card</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
