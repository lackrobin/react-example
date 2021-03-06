import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";
import { SearchParams } from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Luna" animal="Dog" breed="Chiuaua"></Pet>
      <Pet name="Fido" animal="Dog" breed="Boxer"></Pet>
      <Pet name="Pepper" animal="Cat" breed="Siamese"></Pet>
    </div>
  );
};

render(<SearchParams />, document.getElementById("root"));
//render(<App />, document.getElementById("root"));

