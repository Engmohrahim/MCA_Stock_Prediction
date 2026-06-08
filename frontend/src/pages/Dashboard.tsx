export default function Dashboard() {
  return (
    <div>

      <h1>Dashboard Overview</h1>

      <div className="grid grid-4">

        <div className="card">
          <h3>Portfolio Value</h3>
          <h1>$125,420</h1>
        </div>

        <div className="card">
          <h3>Today's Profit</h3>
          <h1 className="green">
            +$4,500
          </h1>
        </div>

        <div className="card">
          <h3>Predictions</h3>
          <h1>82%</h1>
        </div>

        <div className="card">
          <h3>Watchlist</h3>
          <h1>24</h1>
        </div>

      </div>

      <div className="card mt">
        <h2>Market Overview</h2>

        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Value</th>
              <th>Change</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>S&P 500</td>
              <td>5300</td>
              <td className="green">+2.4%</td>
            </tr>

            <tr>
              <td>NASDAQ</td>
              <td>18100</td>
              <td className="green">+1.8%</td>
            </tr>

            <tr>
              <td>DOW JONES</td>
              <td>40200</td>
              <td className="red">-0.4%</td>
            </tr>
          </tbody>

        </table>

      </div>

      <div className="card mt">
        <h2>Portfolio Performance Chart</h2>
        <div className="card mt">
  <h2>Portfolio Performance</h2>

  <ResponsiveContainer
    width="100%"
    height={300}
  >
    <LineChart data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="value"
      />
    </LineChart>
  </ResponsiveContainer>
</div>

<div className="card mt">

  <h2>Watchlist</h2>

  <table>
    <tbody>

      <tr>
        <td>AAPL</td>
        <td>$211</td>
        <td className="green">
          +2.3%
        </td>
      </tr>

      <tr>
        <td>TSLA</td>
        <td>$182</td>
        <td className="red">
          -1.2%
        </td>
      </tr>

      <tr>
        <td>NVDA</td>
        <td>$1350</td>
        <td className="green">
          +5.1%
        </td>
      </tr>

    </tbody>
  </table>

</div>
        <div className="chart-box">
          
        </div>

      </div>

    </div>
  );
}
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jan", value: 10000 },
  { month: "Feb", value: 12000 },
  { month: "Mar", value: 15000 },
  { month: "Apr", value: 18000 },
  { month: "May", value: 21000 },
  { month: "Jun", value: 25000 },
];
