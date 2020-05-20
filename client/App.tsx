import React from "react";

import {sharedData} from "shared";

const App = () => {
  return (
    <div>
      <h1>It worked!</h1>
      <p>Now lets build some stuff</p>
      {sharedData.map(s => <p key={s}>Data: {s}</p>)}
    </div>
  )
}

export default App;