// App.jsx

import "./styles/App.css";
import LandingPage from "./components/LandingPage";
import PlayerSettings from "./components/PlayerSettings";
import Categories from "./components/Categories";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";
import Task from "./components/Task";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/player-settings" element={<PlayerSettings />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </Router>
  );
}

export default App;
