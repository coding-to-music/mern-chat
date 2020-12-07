// Importing dependencies
import express from "express";
import mongoose from "mongoose";

// App config
const app = express()
const PORT = process.env.PORT || 9000

// Middlewares

// DB config
const connectionUrl = "mongodb+srv://jordanwhunter:P@$$w0rd12345@cluster0.ogmha.mongodb.net/chattingdb?retryWrites=true&w=majority"

mongoose.connect(connectionUrl, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// API routes
app.get('/', (req, res) => res.status(200).send("Hello World!"))

// Listener
app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`));