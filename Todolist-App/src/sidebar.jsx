import "./sidebar.css";
import { FaSearch } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { HiCalendar } from "react-icons/hi";
import { Link } from "react-router-dom";

export function SideBar() {
  return (
    <>
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
            <Link to="/upcoming" className="today-link">
              <div className="upcoming-con">
                <FaChevronRight className="chevron-right" />
                <button className="upcoming-button">Upcoming</button>
                <button className="upcoming-digit">12</button>
              </div>
            </Link>

            <Link to="/today" className="today-link">
              <div className="today-con">
                <HiBars3 className="hibar" />
                <button className="today-button">Today</button>
                <button className="today-digit">5</button>
              </div>
            </Link>

            <div className="calender-con">
              <HiCalendar className="calender" />
              <button className="calender-button">Calender</button>
            </div>
          </div>
        </div>

        <div>
          <div className="tasks">LIST</div>
          <div>
            <div className="upcoming-con">
              <button className="color-checker"></button>
              <button className="personal-button">Personal</button>
              <button className="upcoming-digit">3</button>
            </div>
            <div className="today-con">
              <button className="color-checker"></button>
              <button className="work-button">Work</button>
              <button className="today-digit">5</button>
            </div>
            <div className="calender-con">
              <button className="color-checker"></button>
              <button className="list-button">List 1</button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
