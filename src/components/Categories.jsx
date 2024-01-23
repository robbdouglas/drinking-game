// Categories.jsx

import "../styles/Categories.css";
import { useNavigate, useLocation } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();
  const location = useLocation();
  const randomPlayer = location.state && location.state.randomPlayer;

  const handleBackToHomeButtonClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h3>Du bist dran</h3>
      {randomPlayer && <h1>{randomPlayer}</h1>}
      <section>
        <button className="category-button">Saufen</button>
        <button className="category-button">Hart Saufen</button>
        <button className="category-button">
          Exen (Achtung, du könntest verrecken)
        </button>
        <button className="category-button">Wahrheit</button>
        <button className="category-button">Pflicht</button>
        <button className="category-button">Sexy</button>
        <button className="settings-btn">Menü</button>
        <button className="back-to-home" onClick={handleBackToHomeButtonClick}>
          End Game
        </button>
      </section>
    </div>
  );
}

export default Categories;
