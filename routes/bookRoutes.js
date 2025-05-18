const express = require("express")

const router = express.Router


router.get ("/api/books", (request, response, next) => {
    // response.send("This is the books page")
    response.status (200).json ({
        success: {message: "this will send all of the books data"},
        statusCode: 200
    })
})


router.get ("/:id", (request, response, next) => {
    // response.send("This is the books id page")
    response.status (200).json ({
        success: {message: "this will send a single book by its id"},
        statusCode: 200
    })
})


router.get ("/create/new", (request, response, next) => {
    // response.send("This is the create a new book page")
    response.status (200).json ({
        success: {message: "this will create a new book for adoption"},
        statusCode: 200
    })
})

router.get ("/update/:id", (request, response, next) => {
    // response.send("This is the update book page")
    response.status (200).json ({
        success: {message: "this will update book"},
        statusCode: 200
    })
})

router.get ("/delete/:id", (request, response, next) => {
    // response.send("This is the delete a book page")
    response.status (200).json ({
        success: {message: "This will delete a book by its id"},
        statusCode: 200
    })
})

module.exports = router