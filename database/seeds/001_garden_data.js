
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('gardenData').del()
    .then(function () {
      // Inserts seed entries
      return knex('gardenData').insert([
        {id: 1, date: '05-11-2020', time:"12:03AM",temp:'88',humidity:'50',soil_moisture:'40',rain_guage:'1.1',is_raining:'False'},
      ]);
    });
};
