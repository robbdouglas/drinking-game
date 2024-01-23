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
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <li style={{ marginRight: "100px" }}>.</li>
          <li style={{ marginRight: "100px" }}>.</li>
          <li style={{ marginRight: "100px" }}>.</li>
          <li style={{ marginRight: "100px" }}>.</li>
          <li style={{ marginRight: "100px" }}>.</li>
          <li>.</li>
        </ul>
        <button className="settings-btn">Menü</button>
        <button className="back-to-home" onClick={handleBackToHomeButtonClick}>
          End Game
        </button>
      </section>
    </div>
  );
}

export default Categories;
