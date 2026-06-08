import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{ width: "220px", padding: "20px" }}>
      <h2>Stock AI</h2>

      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/stocks">Stocks</Link></li>
        <li><Link to="/prediction">Prediction</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/reports">Reports</Link></li>
      </ul>
    </div>
  );
}