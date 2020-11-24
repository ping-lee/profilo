require('dotenv').config()

const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const cors = require('cors')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV == 'development'
const app = next({ dev })
const handle = app.getRequestHandler()

const books = require('./api/books')

app.prepare().then(() => {
  const server = express()

  // middleware
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({extended: true}))
  server.use(cors())

  // route
  server.use('/books', books)
  
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})