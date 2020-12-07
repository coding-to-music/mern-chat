// Importing dependencies
import express from "express";
import mongoose from "mongoose";
import Pusher from "pusher";
import Messages from "./dbMessages.js";

// App config
const app = express()
const PORT = process.env.PORT || 9000

const pusher = new Pusher({
  appId: "1119239",
  key: "b238ba50a5658ab9e0fe",
  secret: "4e2071e3f4dcc89d6ba5",
  cluster: "us2",
  useTLS: true
});

// Middlewares
app.use(express.json())

// DB config
const connectionUrl = "mongodb+srv://jordanwhunter:A95R2ajtkMZ40yzk@cluster0.ogmha.mongodb.net/chattingdb?retryWrites=true&w=majority"

mongoose.connect(connectionUrl, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// API routes
app.get('/', (req, res) => res.status(200).send("Hello World!"));

app.get('/messages/sync', (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
});

app.post('/messages/new', (req, res) => {
  const dbMessage = req.body

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(`New message created: \n ${data}`)
    }
  })
});

// Listener
app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`));