// App.jsx

import "./styles/App.css";
import LandingPage from "./components/LandingPage";
import PlayerSettings from "./components/PlayerSettings";
import Categories from "./components/Categories";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";
import Task from "./components/Task";
import { useAppContext } from "./components/AppContext";

function App() {
  const { randomPlayer, categories } = useAppContext(); // Nutze den Kontext
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/player-settings" element={<PlayerSettings />} />
        <Route
          path="/categories"
          element={<Categories categories={categories} />}
        />
        <Route path="/task" element={<Task randomPlayer={randomPlayer} />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
