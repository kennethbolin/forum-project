/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    //const bcrypt = require('bcrypt')

   //need to get auth set up the un comment bcrypt

    await knex('user').insert([
      {
        user_id: 1,
        email: 'kenneth@email.com',
        username: 'kenneth',
        password: 'kenneth',
        //password: await bcrypt.hash('kenneth', 10),
      },
      {
        user_id: 2,
        email: 'charles@email.com',
        username: 'charles',
        password: 'charles',
        //password: await bcrypt.hash('charles', 10),
      },
      {
        user_id: 3,
        email: 'bolin@email.com',
        username: 'bolin',
        password: 'bolin',
        //password: await bcrypt.hash('bolin', 10),
      }
    ]);
  };