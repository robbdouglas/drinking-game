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

  const handleCategoryButtonClick = (category) => {
    navigate("/task", { state: { randomPlayer, category } });
  };

  return (
    <div>
      <h3>Du bist dran</h3>
      {randomPlayer && <h1>{randomPlayer}</h1>}
      <section>
        <button
          className="category-button"
          onClick={() => handleCategoryButtonClick("Saufen")}
        >
          Saufen
        </button>
        <button
          className="category-button"
          onClick={() => handleCategoryButtonClick("Hart Saufen")}
        >
          Hart Saufen
        </button>
        <button
          className="category-button"
          onClick={() => handleCategoryButtonClick("Exen")}
        >
          Exen (Achtung, du könntest verrecken)
        </button>
        <button
          className="category-button"
          onClick={() => handleCategoryButtonClick("Wahrheit")}
        >
          Wahrheit
        </button>
        <button
          className="category-button"
          onClick={() => handleCategoryButtonClick("Pflicht")}
        >
          Pflicht
        </button>
        <button
          className="category-button"
          onClick={() => handleCategoryButtonClick("Sexy")}
        >
          Sexy
        </button>
        <button className="settings-btn">Menü</button>
        <button className="back-to-home" onClick={handleBackToHomeButtonClick}>
          End Game
        </button>
      </section>
    </div>
  );
}

export default Categories;
