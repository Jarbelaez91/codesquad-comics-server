// const booksData = require ("../data/books.js")

const Book = require ("../models/bookModel")

const getAllBooks = async (request, response, next) => {

    try{
        const books = await Book.find({})
        return response.status (200).json ({
            success: { message: "This route points to the Books Page with all of the books"},
            data: {books},
            statusCode: 200,
        })
    } catch (error) {
          return next(error)
        }
    }

const getBook = async (request, response, next) => {
    const {id} = request.params

    try {
        // const book = booksData.find (book => book._id === id)
        if (!id){
            throw new Error ("Id is required")
        }
        const book = Book.findById(id)
        if (!book){
            throw new Error 
        }
        return response.status(200).json({
      success: { message: "Book found" },
      data: { book },
        })

    } catch (error) {
       return next (error)
    }
}

const createBook = async (request, response, next) => {
    const {title, author, publisher, genre, pages, rating, synopsis, imageUrl} = request.body

    try {
        if (!title || !author || !pages) {
            throw new Error ("missing required fields, please review")
        }

    const newBook = {
       title, author, publisher, genre, pages, rating, synopsis, imageUrl
    }

    await newBook.save()

    return response.status(201).json({
            success: { message: " a new book is created"},
            data: {newBook},
            statusCode: 201,
        })

    } catch (error) {
     return next (error)
        }
}

const updateBook = async (request, response, next) => {
    const {id} = request.params;
    const {title, author, publisher, genre, pages, rating, synopsis, imageUrl} = request.body

    try {

        if (!title || !author || !pages) {
            throw new Error ("missing required fields")
        }

        const updateBook = await Book.findByIdAndUpdate(
        id,
            {
                $set: {
            title,
            author,
            publisher,
            genre,
            pages,
            rating,
            synopsis,
            imageUrl
        }
    },
    {new: true}
)   
        if (!updateBook){
            throw new Error ("book not found")
        }

        return response.status (201).json ({
            success: { message: "The Book is updated"},
            data: {updateBook},
            statusCode: 201,
        })

    }catch (error) {
        return next (error)
    }
}

const deleteBook = async (request, response, next) => {
    const {id} = request.params

    try{
        if (!id) {
            throw new Error ("id is required")
        }

        await Book.findByIdAndDelete(_id)

        return response.status(200).json ({
            success: {message: "book deleted"} ,
            statusCode: 200,
        })
    } catch (error) {
       return  next (error)
    }
}



module.exports = {getAllBooks, getBook, createBook, updateBook, deleteBook}