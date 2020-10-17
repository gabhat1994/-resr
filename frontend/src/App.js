import React from "react";
import SearchBox from "./components/SearchBox";
import Results from "./components/Results";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <SearchBox />
      <Results />
    </div>
  );
}

export default App;
