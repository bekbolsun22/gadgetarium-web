import React from "react";
import Inputform from "./components/UI/Input";

function App() {
  return (
    <div>
      <Inputform props="input" />
      <Inputform props="button" />
      <Inputform props="search" />
      
    </div>
  );
}

export default App;
