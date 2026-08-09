import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Today } from "./today";
import { SideBar } from "./sidebar";
import { Upcoming } from "./Upcoming";
import { StickyWall } from "./stickynote";
import { AddTask } from "./addtask";

import "./App.css";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <BrowserRouter>
      <div className="app-container">
        <SideBar />

        <div className={`main-container ${showAddTask ? "task-open" : ""}`}>
          <main className="body-content">
            <Routes>
              <Route
                path="/today"
                element={<Today onAddTask={() => setShowAddTask(true)} />}
              />

              <Route
                path="/upcoming"
                element={<Upcoming onAddTask={() => setShowAddTask(true)} />}
              />

              <Route path="/stickynote" element={<StickyWall />} />
            </Routes>
          </main>

          {showAddTask && <AddTask onClose={() => setShowAddTask(false)} />}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
