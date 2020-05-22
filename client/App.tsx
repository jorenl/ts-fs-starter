import React from "react";

import { sharedData } from "shared";
import { useWsConnection } from "./useWsConnection";

const App = () => {
  const wsRef = useWsConnection();
  return (
    <div>
      <h1>It worked!</h1>
      <p>Now lets build some stuff</p>
      {sharedData.map((s) => (
        <p key={s}>Data: {s}</p>
      ))}
      <button onClick={() => wsRef.current.sayHi()}>Say hi</button>
    </div>
  );
};

export default App;
