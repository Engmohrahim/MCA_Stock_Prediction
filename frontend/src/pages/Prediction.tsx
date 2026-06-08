import { useState } from "react";
import api from "../services/api";

export default function Prediction() {

  const [symbol, setSymbol] =
    useState("AAPL");

  const [result, setResult] =
    useState<any>();

  const predict = async () => {

    const res = await api.get(
      `/api/predict/${symbol}`
    );

    setResult(res.data);
  };

  return (
    <div>

      <h1>AI Prediction Center</h1>

      <div className="card">

        <input
          value={symbol}
          onChange={(e) =>
            setSymbol(e.target.value)
          }
        />

        <button onClick={predict}>
          Predict
        </button>

      </div>

      {result && (

        <div className="card mt">
          <div className="card mt">

<h2>Prediction Confidence</h2>

<div
style={{
height:"20px",
background:"#334155",
borderRadius:"10px"
}}
>

<div
style={{
width:"84%",
height:"100%",
background:"#22c55e",
borderRadius:"10px"
}}
></div>

</div>

<p style={{marginTop:"10px"}}>
84% Confidence
</p>

</div>

<div className="card mt">

<h2>AI Recommendation</h2>

<ul>

<li>
BUY AAPL
</li>

<li>
HOLD NVDA
</li>

<li>
SELL TSLA
</li>

</ul>

</div>

          <h2>{result.symbol}</h2>

          <h3>
            Current:
            {result.current_price}
          </h3>

          <h3>
            Predicted:
            {result.predicted_price}
          </h3>

          <h3 className="green">
            {result.signal}
          </h3>

        </div>

      )}

    </div>
  );
}

