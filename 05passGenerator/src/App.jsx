import React, { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "~!#$@^&*()_+|{}:<>?/.,;~";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
  }, [length, setCharAllowed, setNumAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, setCharAllowed, setNumAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="w-full outline-none py-1 px-3"
            value={password}
            readOnly
            placeholder="Password"
          />
          <button className="outline-none bg-blue-700 py-0.5 px-2">copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={1}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label> length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              className="cursor-pointer"
              onChange={() => {
                setNumAllowed((prev) => !prev);
                id = "InputNumber";
              }}
            />
            <label htmlFor="InputNumber">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              className="cursor-pointer"
              onChange={(e) => {
                charAllowed((prev) => !prev);
                id = "InputChar";
              }}
            />
            <label htmlFor="InputChar">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
