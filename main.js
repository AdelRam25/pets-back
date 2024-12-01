const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const petRoute = require('./routes/petRoute')
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(petRoute)

mongoose.connect('mongodb://127.0.0.1:27017/pets');

app.listen(3000)
