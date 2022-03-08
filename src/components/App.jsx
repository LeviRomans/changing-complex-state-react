import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");

  function fNameHandler(e) {
    setFName(e.target.value);
  }

  const [lName, setLName] = useState("");

  function lNameHandler(e) {
    setLName(e.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input
          onChange={fNameHandler}
          name="fName"
          placeholder="First Name"
          value={fName}
        />
        <input
          onChange={lNameHandler}
          name="lName"
          placeholder="Last Name"
          value={lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
