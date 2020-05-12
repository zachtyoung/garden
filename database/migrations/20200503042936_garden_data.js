exports.up = function(knex) {
    return knex.schema
    .createTable('gardenData', gardenData => {
      gardenData.increments();
      gardenData.date('date', 255).notNullable();
      gardenData.time('time', 255).notNullable();
      gardenData.float('temp', 255).notNullable();
      gardenData.float('humidity', 255).notNullable();
      gardenData.float('soil_moisture', 255).notNullable();
      gardenData.float('rain_guage', 255).notNullable();
      gardenData.string('is_raining', 255).notNullable();
    })
      .createTable('water', water => {
        water.increments();
        water.string('date', 255).notNullable();
        water.string('time', 255).notNullable();
        water.string('water_status', 255).notNullable();
      })


  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('temperature')
    .dropTableIfExists('water')
  };
  