import React, { useState } from "react";

const fruits = ["orange", "apple", "grape"];

export default function Delete() {
  const [fruit, setFruit] = useState("apple");
  return (
    <div className="App">
      {fruits.map((f) => (
        <>
          <input
            type="radio"
            name="fruit"
            value={f}
            checked={fruit === f}
            onChange={(e) => setFruit(e.currentTarget.value)}
          />{" "}
          {f}
        </>
      ))}
      <p>{fruit}</p>
    </div>
  );
}
