import { useState } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numAllowed, setNumAllowe] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  return <h1 className="text-white">Password Generator</h1>;
}

export default App;
