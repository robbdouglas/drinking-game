// App.jsx

import "./styles/App.css";
import LandingPage from "./components/LandingPage";
import PlayerSettings from "./components/PlayerSettings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/player-settings" element={<PlayerSettings />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
