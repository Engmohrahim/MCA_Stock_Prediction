import { useState } from "react";
import axios from "axios";

export default function Stocks() {
  const [symbol, setSymbol] = useState("AAPL");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const search = async () => {
    setLoading(true);
    setError("");
    try {
      // Ensure upper case for stock symbols (e.g., 'aapl' -> 'AAPL')
      const res = await axios.get(
  `http://127.0.0.1:8000/api/stocks/${symbol.toUpperCase()}`
    );
      setData(res.data);
    } catch (err: any) {
      setError("Stock symbol not found or server error.");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Stock Explorer</h1>

      <div className="card">
        <input
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder="Enter Ticker (e.g. TSLA, MSFT)"
        />
        <button onClick={search} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && (
        <div className="card mt">
          <h2>{data.symbol} - {data.company_name}</h2>
          <h3>Sector: {data.sector}</h3>

          <div className="grid grid-3">
            <div>
              <h4>Current Price</h4>
              {/* Dynamically reading data from your FastAPI response */}
              <p>${data.current_price?.toFixed(2) || "N/A"}</p>
            </div>

            <div>
              <h4>Volume</h4>
              <p>{data.volume?.toLocaleString() || "N/A"}</p>
            </div>

            <div>
              <h4>Market Cap</h4>
              <p>${data.market_cap ? (data.market_cap / 1e9).toFixed(2) + " B" : "N/A"}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}