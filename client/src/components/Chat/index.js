import { Avatar, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from "../../axios.js";
import "./style.css";

const Chat = ({ messages }) => {
  // We need to keep track of the user's input
  const [input, setInput] = useState("")

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      // hard coded until authorization query is implemented
      name: "DEMO",
      message: input,
      timestamp: "Right now",
      received: true,
    })

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {/* Go through messages and map through */}
        {messages.map(message => {
          return (
            // string interpolation
            // this step can change with passport authentication
            <p className={`chat__message ${message.received && "chat__receiver"}`}>
              <span className="chat__name">{message.name}</span>

              {message.message}

              <span className="chat__timestamp">{message.timestamp}</span>
            </p>
          )
        })}
         

         {/* <p className="chat__message chat__receiver">
           <span className="chat__name">Jordan</span>

           This is an outgoing message

           <span className="chat__timestamp">{new Date().toUTCString()}</span>
         </p> */}
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Type message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">Send</button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat
