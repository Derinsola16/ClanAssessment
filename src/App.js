import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "../src/Components/Main";
import { GlobalStorage } from "../src/Hooks/GlobalContext";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Main />
      </GlobalStorage>
    </BrowserRouter>
  );
};

export default App;
