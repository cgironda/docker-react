import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Konica Minolta !!!
        </p>
        <a
          className="App-link"
          href="https://www.konicaminolta.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Come with us ...
        </a>
      </header>
    </div>
  );
}

export default App;
