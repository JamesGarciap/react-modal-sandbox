import React from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";
import modalContent from "./content.json";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Modal {...modalContent} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
