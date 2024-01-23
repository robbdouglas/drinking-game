// Categories.jsx

import "../styles/Categories.css"; 

function Categories() {
  return (
    <div>
      <h3>Its your turn</h3>
      <h1>Player</h1>
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

        <button>End Game</button>
      </section>
    </div>
  );
}
export default Categories;
