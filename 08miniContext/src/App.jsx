import { useState } from "react";

import UserContextProvider from "./context/UserContextProvider";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1>Learn the context Api</h1>
    </UserContextProvider>
  );
}

export default App;
