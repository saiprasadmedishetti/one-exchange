import React, { useState, useEffect } from "react";

const API_URL = "https://api.pro.coinbase.com/products/BTC-USD/trades";
const SOCKET_URL = "wss://ws-feed.pro.coinbase.com";
const socket = new WebSocket(SOCKET_URL);
const sub = {
  channels: ["full", "ticker"],
  product_ids: ["BTC-USD"],
  type: "subscribe",
};
const unsub = {
  channels: ["full", "ticker"],
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
      .then((data) => setTrades(data.splice(0, 20)));
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
      } else if (data.type === "match") {
        setTrades((prev) => {
          const uniqTrades = prev.filter(
            (item) => item.trade_id !== data.trade_id
          );
          const newTrades = [data, ...uniqTrades];
          newTrades.length = prev.length;
          return newTrades;
        });
      }
    };
    return () => {
      socket.send(JSON.stringify(unsub));
    };
  }, []);

  return (
    <>
      <div
        className="stream"
        style={{
          backgroundColor:
            prev && socketData && prev.price > socketData.price
              ? "#cd5c5c1a"
              : "#edf4ff",
        }}
      >
        {socketData && (
          <>
            <h1
              className="price"
              style={{
                color: prev.price > socketData.price ? "indianred" : "#42a76f",
              }}
            >
              $ {Number(socketData.price).toLocaleString()}
            </h1>
            <div className="badge">
              Low 24hr
              <span
                style={{
                  color:
                    prev.low_24h > socketData.low_24h ? "indianred" : "#42a76f",
                }}
              >
                $ {Number(socketData.low_24h).toLocaleString()}
              </span>
            </div>
            <div className="badge">
              Volume
              <span
                style={{
                  color:
                    prev.last_size > socketData.last_size
                      ? "indianred"
                      : "#42a76f",
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
                      : "#42a76f",
                }}
              >
                $ {Number(socketData.open_24h).toLocaleString()}
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
              {/* <th>Side</th> */}
              <th>Price</th>
              <th>Size</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {trades &&
              trades.length > 0 &&
              trades.map((trade) => (
                <tr
                  key={trade.trade_id}
                  style={{
                    color: trade.side === "sell" ? "indianred" : "#42a76f",
                  }}
                >
                  <td>{trade.trade_id}</td>
                  {/* <td>{trade.side}</td> */}
                  <td>$ {Number(trade.price).toLocaleString(4)}</td>
                  <td>{trade.size}</td>
                  <td>{new Date(trade.time).toLocaleDateString()}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Trade;
