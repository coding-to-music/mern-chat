// Importing dependencies
import express from "express";
import mongoose from "mongoose";
import Pusher from "pusher";
import Messages from "./dbMessages.js";
import cors from "cors";

// App config
const app = express()
const PORT = process.env.PORT || 9000

// Taken from pusher.com
const pusher = new Pusher({
  appId: "1119239",
  key: "b238ba50a5658ab9e0fe",
  secret: "4e2071e3f4dcc89d6ba5",
  cluster: "us2",
  useTLS: true
});

// Middlewares
app.use(express.json())
app.use(cors())

// NPM installed Cors as an alternative to this:
// app.use((req, res, next) => {
//   // Course headers - allowing the request to come from any endpoint
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*"); 
//   // Once req is run, we push res to next()
//   next();
// });

// DB config
const connectionUrl = "mongodb+srv://jordanwhunter:A95R2ajtkMZ40yzk@cluster0.ogmha.mongodb.net/chattingdb?retryWrites=true&w=majority"

mongoose.connect(connectionUrl, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.once("open", () => {
  console.log("DB connected");

  const msgCollection = db.collection("messagecontents")
  const changeStream = msgCollection.watch()

  // changeStream will enact pusher to send back to front end
  changeStream.on("change", (change) => {
    console.log(change);

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted",
        {
          // .name and not .user to return name of person sending message
          name: messageDetails.name,
          message: messageDetails.message
        }
      )
    } else {
      console.log("There was an error triggering Pusher")
    }
  })
});

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