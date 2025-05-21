const booksData = require ("../data/books.js")

const getAllBooks = async (request, response, next) => {

    try{
        const books = booksData
        return response.status (200).json ({
            success: { message: "This route points to the Books Page with all of the books"},
            data: {books},
        })
    } catch (error) {
        return response.status (400).json ({
            error: { message: "resource not found. Search again"}
        })
    }
}

const getBook = async (request, response, next) => {
    const {id} = request.params

    try {
        const book = booksData.find (book => book._id === id)
        return response.status (200).json ({
            success: { message: "Book found"},
            data: {book}
        })
    } catch (error) {
        return response.status(400).json ({
            error: { message: "there is an error when retrieving a book"}
        })
    }
}

const createBook = async (request, response, next) => {
    const {title, author, publisher, genre, pages, rating, synopsis, imageUrl} = request.body

    const newBook = {
       title, author, publisher, genre, pages, rating, synopsis, imageUrl
    }

    try {
        booksData.push(newBook)

        return response.status(201).json({
            success: { message: " a new book is created"},
            data: {newBook},
        })

    } catch (error) {
        return response.status(400).json ({
            error: { message: "there is an error when creating a book"},
        })
    }
}

const updateBook = async (request, response, next) => {
    const {id} = request.params;
    const {title, author, price, starRating, synopsis} = request.body
    try {
        const updateBook = {
            title,
            author,
            price,
            starRating,
            synopsis,
        }

        const foundBookIndex = booksData.findIndex ((book) => book._id === id)
        booksData[foundBookIndex] = updateBook

        return response.status (201).json ({
            success: { message: "The Book is updated"},
            data: {updateBook},
        })

    }catch (error) {
        return response.status (400).json ({
            error: { message: "There is an error when updating a book"}
        })
    }
}

const deleteBook = async (request, response, next) => {
    const {id} = request.params

    try{
        const eraser = booksData.filter((book) => book._id !== id)
        console.log(eraser)

        return response.status(200).json ({
            success: {message: "book deleted"} ,
        })
    } catch (error) {
        return response.status (400).json ({
            error: {message: "There is an error when deleting a book"},
        })
    }
}



module.exports = {getAllBooks, getBook, createBook, updateBook, deleteBook}