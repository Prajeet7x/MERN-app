const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const goalRoutes = require('./routes/goalRoutes')
const userRoutes = require('./routes/userRoutes')

connectDB()

const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', goalRoutes)
app.use('/api/users', userRoutes)

app.use(errorHandler)

app.listen(port, ()=> console.log(`Server is runing on ${port} ..`))

