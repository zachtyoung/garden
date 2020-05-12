
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('water').del()
    .then(function () {
      // Inserts seed entries
      return knex('water').insert([
        {id: 1, date: '05-11-2020',time:'12:03AM',water_status:"Off"},
        {id: 2, date: '05-11-2020',time:'1:03AM',water_status:"On"},
        {id: 3, date: '05-11-2020',time:'2:03AM',water_status:"Off"},
      ]);
    });
};
