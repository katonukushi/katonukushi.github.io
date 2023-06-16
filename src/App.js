import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("magie!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Willkommen bei meiner individuellen React Anwendung!</h1>
        <button onClick={handleClick}>Klicken Sie hier!</button>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
