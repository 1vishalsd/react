import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="  fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2 text-white">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className=" rounded-2xl px-3 pb-1 "
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="rounded-2xl px-3 pb-1 "
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="rounded-2xl px-3 pb-1 "
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="rounded-2xl px-3 pb-1 "
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="rounded-2xl px-3 pb-1 "
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
