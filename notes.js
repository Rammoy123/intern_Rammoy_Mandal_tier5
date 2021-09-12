const { query } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const db = mongoose.connection
var router1 = express.Router()
const notes = require('./Schema')

console.log('mandal')
//get rqst comes & in response server send all the objects in "notes" collection
router1.get('/', (req, res) => {
  console.log('rammoy')
  var lol = notes.find()

  lol.exec(function (err, data) {
    if (err) {
      res.send('lol')
    }
    res.json(data)
  })
})
//post method to get request through querry ,inserting the json object to database & sending acknowledgment back
router1.post('/', function (req, res, next) {
  console.log(req)
  var item = {
    NoteNo: req.query.NoteNo,
    Heading: req.query.Heading,
    LineNo: req.query.LineNo
  }

  db.collection('notes').insertOne(item, function (err, result) {
    // assert.equal(null, err);
    if (result.acknowledged === true) {
      console.log('item has been inserted')
      res.json(result)
      db.close
    } else {
      res.json('some error occured')
    }
  })
})
//get request with id ,match with the "notes" collection ids & send back the particular json object matched with the id
router1.get('/:id', (req, res) => {
  console.log(req.params.id)
  Post_data = notes.findById(req.params.id) === true

  Post_data = notes.findById(req.params.id)
  Post_data.exec(function (err, data1) {
    if (err) {
      res.send(data1)
    }

    res.send(data1)
  })
})

//get request with id ,match with the "notes" collection ids & got the "Note No" change rqst with querry & update it
router1.patch('/:id', (req, res) => {
  const id = req.params.id
  //updating the NoteNo
  const updates = { NoteNo: req.query.NoteNo }
  console.log(updates)

  notes
    .findByIdAndUpdate(id, { $set: updates }, { new: true })
    .then(reslt => {
      console.log(reslt)
      res.status(200).json({ success: true, msg: reslt })
    })
    .catch(err => {
      res.status(400).json({ success: false, msg: err })
    })
})
//Delete rqst comes with id , match with the "notes" collection, Delete the particular json object in thecollection
router1.delete('/:id', (req, res) => {
  const id = req.params.id
  notes.findByIdAndDelete(id, function (err, docs) {
    if (err) {
      console.log(err)
    } else {
      res.json({ success: true, msg: 'Targeted object deleted!!!!!!' })
    }
  })
})

module.exports = router1
