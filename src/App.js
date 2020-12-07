import React from 'react';
import './App.css';
import Chat from './components/Chat/index.js';
import Sidebar from './components/Sidebar/index.js';

function App() {
  return (
    <div className="app">
      {/* <h1>Let's build a MERN Chat App</h1> */}

      {/* Sidebar component */}
      <Sidebar />

      {/* Chat component */}
      <Chat />
    </div>
  );
}

export default App;
