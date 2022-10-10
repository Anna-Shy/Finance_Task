import React, { useState, useEffect } from "react";
import io from "socket.io-client";

import { TickerListApp } from "./TickerList/TickerListApp";

function App() {
  const [tickerList, setTickerList] = useState(null);

  useEffect(() => {
    const socket = io.connect("http://localhost:4000");
    socket.emit("start");
    socket.on("ticker", (data) => {
      setTickerList([...data]);

      return () => socket.disconnect();
    });
  }, []);

  return (
    <div className="App">
      {tickerList && <TickerListApp tickerList={tickerList} />}
    </div>
  );
}

export default App;
