const db = require('../database/dbConfig.js');
module.exports = {
    find,
    add,
    findById,
    getWaterState,
    updateWaterState
  };
  
  function find() {
    return db('gardenData')
  }
  function add(data) {
    return db('gardenData').insert(data)
  }
  function findById(base,id){
    return db(base)
    .where('id', id)
    .first()
  }
  function getWaterState(){
    return db('water')
    .orderBy('id','desc')
    .first()
  }
  function updateWaterState(data) {
    return db('water').insert(data)
  }