const express = require('express')
const morgan = require('morgan')

const connectDB = require('./src/server/database/connection')

const app = express()

const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'))

// mongodb connection
connectDB()

// parse request to body-parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')

// load assets
app.use(express.static('public'))

// load routers
app.use('/', require('./src/server/routes/router'))

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) })
