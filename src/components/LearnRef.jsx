import React, { useState, useRef, useEffect, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NAME":
      return [...state, action.payload];
    default:
      return state;
  }
};

const LearnRef = () => {
  const [name, setName] = useState("");
  const [names, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please type a valid name");
      return;
    }

    dispatch({ type: "ADD_NAME", payload: name });
    setName("");
  };

  const scroll = useRef();
  useEffect(() => {
    scroll.current.scrollIntoView();
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {names.map((name, i) => (
          <h1 key={i} className="border bg-green-500 text-gray-200 p-4 mt-16">
            name
          </h1>
        ))}
      </div>
      <span ref={scroll}></span>
    </>
  );
};

export default LearnRef;
