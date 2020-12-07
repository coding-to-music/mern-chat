// Importing dependencies
import express from "express"

// App config
const app = express()
const PORT = process.env.PORT || 9000

// Middlewares

// DB config

// API routes
app.get('/', (req, res) => res.status(200).send("Hello World!"))

// Listener
app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`));