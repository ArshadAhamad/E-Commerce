import TopBar from "./Admin-Dashboard/components/topbar/topBar";
import "./App.css";
import SideBar from "./Admin-Dashboard/components/sidebar/sideBar";
import Home from "./Admin-Dashboard/pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <div className="container">
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;