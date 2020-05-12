const express = require('express');
const server = express();
server.use(express.json());
const Garden = require('./database/garden-model');
server.get('/', (req, res) => {
  Garden.find()
  .then(data =>{
    res.status(200).json(data)
  })
});
server.post('/', (req, res) => {
  
  Garden.add(req.body)
  .then(data =>{
    console.log(data[0])
    Garden.findById('gardenData',data[0])
    .then(el=>{
      res.status(200).json(el)
    })
  })
});
server.get('/water', (req, res) => {
  Garden.getWaterState()
  .then(data =>{
    res.status(200).json(data)
  })
});
server.post('/water', (req, res) => {
  
  Garden.updateWaterState(req.body)
  .then(data =>{
    console.log(data[0])
    Garden.findById('water',data[0])
    .then(el=>{
      res.status(200).json(el)
    })
  })
});







module.exports = server;