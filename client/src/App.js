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
    channel.bind('inserted', function(newMessage) {
      // alert(JSON.stringify(newMessage));
      // when pusher notifies of a new message - run through ALL messages and output new ones
      setMessages([...messages, newMessage])
    });

    // we need a cleanup function so a new listener isn't created every single time a message is sent
    // the objective is to only have one subscriber when messages changes
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  // runs piece of code once
  // messages needs to be added as dependency bc we're depending on it with the spread operator above
  }, [messages])

  console.log(messages);

  return (
    <div className="app">
      {/* <h1>Let's build a MERN Chat App</h1> */}
      <div className="app__body">
        {/* Sidebar component */}
        <Sidebar />

        {/* Chat component */}
        {/* Prop drilling - add messages to Chat() */}
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
 