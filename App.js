import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1", {}, "Hello Word from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
const newElements = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hellooo"),
    React.createElement("h2", {}, "HH2 from child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "H1 fro child1"),
    React.createElement("h2", {}, "HH2 from child1"),
  ]),
]);
root.render(newElements);
