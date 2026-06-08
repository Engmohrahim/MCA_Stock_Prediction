export default function Portfolio() {
  return (
    <div>

      <h1>Portfolio Management</h1>

      <div className="grid grid-3">

        <div className="card">
          Total Investment
          <h2>$100,000</h2>
        </div>

        <div className="card">
          Current Value
          <h2>$125,000</h2>
        </div>

        <div className="card">
          Profit
          <h2 className="green">
            +25%
          </h2>
        </div>

      </div>

      <div className="card mt">

        <h2>Holdings</h2>

        <table>
          <thead>
            <tr>
              <th>Stock</th>
              <th>Qty</th>
              <th>Value</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>AAPL</td>
              <td>20</td>
              <td>$3500</td>
            </tr>

            <tr>
              <td>TSLA</td>
              <td>15</td>
              <td>$4500</td>
            </tr>
          </tbody>

        </table>

      </div>

    </div>
  );
}
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const holdings = [
  { name: "AAPL", value: 40 },
  { name: "TSLA", value: 30 },
  { name: "GOOGL", value: 20 },
  { name: "MSFT", value: 10 },
];
<div className="card mt">

<h2>Portfolio Allocation</h2>

<ResponsiveContainer
width="100%"
height={350}
>
<PieChart>

<Pie
data={holdings}
dataKey="value"
nameKey="name"
outerRadius={120}
/>

<Tooltip />

</PieChart>
</ResponsiveContainer>

</div>