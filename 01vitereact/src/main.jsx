import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import React from "react";
function MyApp() {
  return (
    <div>
      <h1>Custom React !</h1>
    </div>
  );
}
/*
const ReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: " Click me to visit google",
};
*/

const anotherUser = " hello world";
const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Click Me to visit google",
  anotherUser
);
const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);
createRoot(document.getElementById("root")).render(reactElement);
