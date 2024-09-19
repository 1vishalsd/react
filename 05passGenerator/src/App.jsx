import React, { useCallback, useEffect, useState } from "react";
import { useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //useRef
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (numAllowed) str += "1234567890";
    if (charAllowed) str += "~!@#$%^&*()<>?:{}[]|";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 9);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [charAllowed, numAllowed, passwordGenerator, length]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-700  ">
        <h1 className="text-center mb-3 text-4xl">Password Generator</h1>
        <div className="flex overflow-hidden shadow rounded-lg mb-4">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="overflow-hidden w-full py-1 px-3"
            readOnly
          />
          <button className="bg-blue-700 px-3" onClick={copyToClipboard}>
            copy
          </button>
        </div>
        <div className="flex gap-x-2 text-sm">
          <div className="flex text-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer "
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>length : {length}</label>
          </div>
          <div className="gap-x-1 flex text-sm">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="inputNum"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="inputNum">Number</label>
          </div>
          <div className="gap-x-1 flex text-sm">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="inputChar"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="inputChar">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
