import mongoose from "mongoose";

const chattingSchema = mongoose.Schema({
  message: String,
  name: String, 
  timestamp: String,
  // Currently using name to tell computer whether or not the user sent a message, but could also set up a received: String schema
  received: Boolean
});

export default mongoose.model("messageContent", chattingSchema)