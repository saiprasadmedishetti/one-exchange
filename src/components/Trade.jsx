import React, { useState, useEffect } from "react";

const API_URL = "https://api.pro.coinbase.com/products/BTC-USD/trades";
const SOCKET_URL = "wss://ws-feed.pro.coinbase.com";
const socket = new WebSocket(SOCKET_URL);
const sub = {
  channels: ["ticker"],
  product_ids: ["BTC-USD"],
  type: "subscribe",
};
const unsub = {
  channels: ["ticker"],
  product_ids: ["BTC-USD"],
  type: "unsubscribe",
};

function Trade() {
  const [trades, setTrades] = useState([]);
  const [socketData, setSocketData] = useState(null);
  const [prev, setPrev] = useState({});

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTrades(data));
    return () => {
      setTrades([]);
    };
  }, []);

  useEffect(() => {
    socket.onopen = (e) => {
      socket.send(JSON.stringify(sub));
    };
    socket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (data.type === "ticker") {
        setSocketData((prev) => {
          if (prev) {
            setPrev(prev);
          }
          return data;
        });
        // console.log(data);
      }
    };
    return () => {
      socket.send(JSON.stringify(unsub));
    };
  }, []);

  return (
    <>
      <div className="stream">
        {socketData && (
          <>
            <h1
              className="price"
              style={{
                color:
                  prev.price > socketData.price
                    ? "indianred"
                    : "mediumseagreen",
              }}
            >
              $ {Number(socketData.price).toLocaleString()}
            </h1>

            <div className="badge">
              Volume
              <span
                style={{
                  color:
                    prev.last_size > socketData.last_size
                      ? "indianred"
                      : "mediumseagreen",
                }}
              >
                {socketData.last_size}
              </span>
            </div>
            <div className="badge">
              Open 24hr
              <span
                style={{
                  color:
                    prev.open_24h > socketData.open_24h
                      ? "indianred"
                      : "mediumseagreen",
                }}
              >
                $ {socketData.open_24h}
              </span>
            </div>
            <div className="badge">
              Low 24hr
              <span
                style={{
                  color:
                    prev.low_24h > socketData.low_24h
                      ? "indianred"
                      : "mediumseagreen",
                }}
              >
                $ {socketData.low_24h}
              </span>
            </div>
          </>
        )}
      </div>
      <div className="scroll">
        <table className="table">
          <thead>
            <tr>
              <th>Trade ID</th>
              <th>Side</th>
              <th>Price</th>
              <th>Size</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {trades &&
              trades.length > 0 &&
              trades.map((trade) => (
                <tr key={trade.trade_id}>
                  <td>{trade.trade_id}</td>
                  <td>{trade.side}</td>
                  <td>$ {Number(trade.price).toFixed(3).toLocaleString()}</td>
                  <td>{trade.size}</td>
                  <td>{new Date(trade.time).toDateString()}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Trade;
