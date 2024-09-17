import { useState } from "react";
import "./App.css";

function App() {
  const avatar = {
    src: "./image.jpg",

    style: {
      width: "73px",
      borderRadius: "4rem",
      height: "73px",
      margin: "4px",
    },
  };
  return (
    <>
      <h1>These are The World Famous doctor's</h1>
      <img src={avatar.src} style={avatar.style} />

      <img src={avatar.src} style={avatar.style} />
      <img src={avatar.src} style={avatar.style} />
    </>
  );
}

export default App;
