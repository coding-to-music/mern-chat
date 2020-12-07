import React, { useEffect } from 'react';
import Chat from './components/Chat/index.js';
import Sidebar from './components/Sidebar/index.js';
import './App.css';

function App() {

  // runs a piece of code when the app loads
  useEffect(() => {
    // Copied from Pusher.com docs
    const pusher = new Pusher('b238ba50a5658ab9e0fe', {
      cluster: 'us2'
    });

    // We bind to event and subscribe to the pusher channel
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      alert(JSON.stringify(data));
    });
  // runs piece of code once
  }, [])

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
 