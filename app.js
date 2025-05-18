const express = require("express");

const app = express()

const cors = require ("cors")

const morgan = require ("morgan")

const helmet = require ("helmet")

const path = require ("node:path")

const bookRoutes = require ("./routes/bookRoutes")

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

const PORT = 8080

app.use (cors())
app.use (morgan("combined"))
app.use (helmet())

app.get ("/", (request, response, next) => {
        // response.send("This is the home page")

    response.status (200).json ({
        success: {message: "this is the main page"},
        statusCode: 200
    })
})

// // app.get ("/api/books", (request, response, next) => {
// //     // response.send("This is the books page")
// //     response.status (200).json ({
// //         success: {message: "this will send all of the books data"},
// //         statusCode: 200
// //     })
// // })

app.use("/api/books", bookRoutes)

// app.get ("/api/books/:id", (request, response, next) => {
//     // response.send("This is the books id page")
//     response.status (200).json ({
//         success: {message: "this will send a single book by its id"},
//         statusCode: 200
//     })
// })


// app.get ("/api/books/create/new", (request, response, next) => {
//     // response.send("This is the create a new book page")
//     response.status (200).json ({
//         success: {message: "this will create a new book for adoption"},
//         statusCode: 200
//     })
// })

// app.get ("/api/books/update/:id", (request, response, next) => {
//     // response.send("This is the update book page")
//     response.status (200).json ({
//         success: {message: "this will update book"},
//         statusCode: 200
//     })
// })

// app.get ("/api/books/delete/:id", (request, response, next) => {
//     // response.send("This is the delete a book page")
//     response.status (200).json ({
//         success: {message: "This will delete a book by its id"},
//         statusCode: 200
//     })
// })

app.listen (PORT, () => {
    console.log (`this server is listening on port ${PORT}`)
    console.log (`Open in browser: http://localhost:${PORT}/`)
})

