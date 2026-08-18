import "./sidebar.css";
import { FaSearch } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { HiCalendar } from "react-icons/hi";
import { Link } from "react-router-dom";
import { MdOutlineStickyNote2 } from "react-icons/md";

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
          <div className="sidebar-task-container">
            <Link to="/upcoming" className="today-link">
              <div className="upcoming-con">
                <FaChevronRight className="chevron-right" />
                <button className="upcoming-button">
                  <span>Upcoming</span>
                </button>
                <button className="upcoming-digit">
                  <span>12</span>
                </button>
              </div>
            </Link>

            <Link to="/today" className="today-link">
              <div className="today-con">
                <HiBars3 className="hibar" />
                <button className="today-button">
                  <span>Today</span>
                </button>
                <button className="today-digit">
                  <span>5</span>
                </button>
              </div>
            </Link>

            <div className="calender-con">
              <HiCalendar className="calender" />
              <button className="calender-button">
                <span>Calender</span>
              </button>
            </div>
            <Link to="/stickynote" className="today-link">
              <div className="stickynote-con">
                <MdOutlineStickyNote2 className="stickynote" />
                <button className="sticky-button">
                  <span>Sticky Wall</span>
                </button>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <div className="tasks">LIST</div>
          <div className="sidebar-task-container">
            <div className="upcoming-con">
              <button className="color-checker"></button>
              <button className="personal-button">
                <span>Personal</span>
              </button>
              <button className="upcoming-digit">
                <span>3</span>
              </button>
            </div>
            <div className="today-con">
              <button className="color-checker"></button>
              <button className="work-button">
                <span>Work</span>
              </button>
              <button className="today-digit">
                <span>5</span>
              </button>
            </div>
            <div className="calender-con">
              <button className="color-checker"></button>
              <button className="list-button">
                <span>List 1</span>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
