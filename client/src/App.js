import React from 'react';
import Chat from './components/Chat/index.js';
import Sidebar from './components/Sidebar/index.js';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* <h1>Let's build a MERN Chat App</h1> */}
      <div className="app__body">
        {/* Sidebar component */}
        <Sidebar />

        {/* Chat component */}
        <Chat />
      </div>
    </div>
  );
}

export default App;
 