// Categories.jsx

import "../styles/Categories.css";
import { useNavigate, useLocation } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();
  const location = useLocation();
  const randomPlayer = location.state && location.state.randomPlayer;
  const categories = location.state && location.state.categories;

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
        {categories.map((category) => (
          <button
            key={category}
            className="category-button"
            onClick={() => handleCategoryButtonClick(category)}
          >
            {category}
          </button>
        ))}
        <button className="settings-btn">Menü</button>
        <button className="back-to-home" onClick={handleBackToHomeButtonClick}>
          Spiel beenden
        </button>
      </section>
    </div>
  );
}

export default Categories;
