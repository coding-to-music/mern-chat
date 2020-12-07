import React, { useEffect, useState } from 'react';
// pusher-js used for frontend, pusher used for backend
import Pusher from "pusher-js";
import Chat from './components/Chat/index.js';
import Sidebar from './components/Sidebar/index.js';
import axios from "./axios.js";
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // .get to pull new messages and sync'd messages 
    axios.get("/messages/sync").then(response => {
      setMessages(response.data)
    })
  }, [])

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

  console.log(messages);

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
 