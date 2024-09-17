import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);

  const addValue = () => {
    const checkAdd =
      counter > 20
        ? alert(
            " You value goes above of 20 and , i am not able to increase value above 20"
          )
        : setCounter(counter++);
  };
  const removeValue = () => {
    const checkRemove =
      counter <= 0 ? alert("Your Value goes to down") : setCounter(counter--);
  };

  return (
    <>
      <h1>hello world</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
      <footer>footer : {counter}</footer>
    </>
  );
}

export default App;
