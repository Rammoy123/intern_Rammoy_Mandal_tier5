const express = require('express')
const app = express()
var router1 = express.Router()

const port = 3000
const mongoose = require('mongoose')
// var bodyParser = require('body-parser');
const { response } = require('express')
//Database connection
mongoose.connect('mongodb://localhost:27017/notebook', {
  useNewUrlParser: true,
  //useFindAndModify: false,
  useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function () {
  console.log('Connected successfully')
})

//making the route to notes.js file
const Router_1 = require('./notes')
app.use('/notes', Router_1)

app.use(router1)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
