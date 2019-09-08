import React from "react";
import {render} from "react-dom";
import { Pet } from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {name: "Luna", animal: "Dog", breed:"Sheperd"}),
    React.createElement(Pet, {name: "Fido", animal: "Dog", breed:"Labrador"}),
    React.createElement(Pet, {name: "Pepper", animal: "Cat", breed:"Lion"})
  );
};

render(React.createElement(App), document.getElementById("root"));
