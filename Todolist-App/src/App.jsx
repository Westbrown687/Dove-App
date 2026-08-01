import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Today } from "./today";
import { SideBar } from "./sidebar";
import { Upcoming } from "./Upcoming";
import { StickyWall } from "./stickynote";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <SideBar />

        <main className="body-content">
          <Routes>
            <Route path="/today" element={<Today />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/stickynote" element={<StickyWall />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
