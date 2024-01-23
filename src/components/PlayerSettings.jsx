// PlayerSettings.jsx

import "../styles/PlayerSettings.css";

function PlayerSettings() {
  return (
    <div>
      <table>
        <tr>
          <th>
            <h2>Trinker</h2>
          </th>
          <th>
            <h2>Nicht-Trinker / Fahrer</h2>
          </th>
        </tr>
        <tr>
          <td>
            <button>+</button>
          </td>
          <td>
            <button>+</button>
          </td>
        </tr>
      </table>
      <button>START GAME</button>
      <button>Menü</button>
    </div>
  );
}

export default PlayerSettings;
