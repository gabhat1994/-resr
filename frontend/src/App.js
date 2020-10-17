import React, { useState } from "react";
import Display from "./Display";

function App() {
  return (
    <div className="App">
      <form>
        <input type="text" onChange={(event) => handleChange(event)} />
        <button type="submit" onClick={formHandle}>
          Add
        </button>
      </form>
      <Display nameA={nameA} />
    </div>
  );
}

export default App;
