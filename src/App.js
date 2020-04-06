import React from 'react';
import gif from './boy-do-computador.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gif}/>
        <p>
        Congratulations you got it!
        </p>
        <a
          className="App-link"
          href="https://github.com/DanielFrancaContaGit/pilula-docker.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
