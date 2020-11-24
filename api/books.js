const express = require('express')
const router = express.Router()
const { pool } = require('../config')


const timeLog = (request, response, next) => {
    console.log('Time: ', Date.now())
    next()
}

const getBooks = (request, response) => {
    pool.query('SELECT * FROM books', (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const addBook = (requset, response) => {
    const {author, title } = request.body

    pool.query(
        'INSERT INTO books (author, title) VALUES($1, $2)',
        [author, title],
        (error) => {
        if (error) {
            throw error
        }
        response.status(201).json({status: 'success', message: 'Book added.'})
        },
    )
}


// middleware that is specific to this router
router.use(timeLog)
      .get('/', getBooks)
      .post('/', addBook)

module.exports = router