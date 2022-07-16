import React from "react";
import Main from "./Components/Main";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <Main />
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
