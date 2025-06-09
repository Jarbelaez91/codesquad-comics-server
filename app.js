require("dotenv").config()

require("./config/connection")

require("./config/authStrategy")



const express = require("express");

const app = express()

const cors = require ("cors")

const morgan = require ("morgan")

const helmet = require ("helmet")

const path = require ("node:path")

const mongoose =require("mongoose")

const bookRoutes = require ("./routes/bookRoutes")
const authRoutes = require ("./routes/authRoutes")

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 8080

app.use (cors({credentials: true, origin: ture}))
app.use (morgan("combined"))
app.use (helmet())

const bookRoutes = require ("./routes/bookRoutes")
const authorRoutes = require ("./routes/authorRoutes")
const authRoutes = require ("./routes/authRoutes")

app.get ("/", (request, response, next) => {
        // response.send("This is the home page")

    response.status (200).json ({
        success: {message: "this is the main page"},
        statusCode: 200
    })
})


app.use("/api/books", bookRoutes);
app.use("/auth", authRoutes)




app.listen (PORT, () => {
    console.log (`this server is listening on port ${PORT}`)
    console.log (`Open in browser: http://localhost:${PORT}/`)
})

