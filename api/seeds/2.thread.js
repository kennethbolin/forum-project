/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    //const bcrypt = require('bcrypt')
   
    await knex('thread').insert([
        {
            thread_id: 1,
            user_id: 1,
            title: "quis voluptas a",
            subject: "Aut autem est aut ut officia et. Maiores minus error dolorem sint voluptatem impedit enim non laboriosam. Fuga quod libero est in eaque.",
            created: new Date(Date.now())
          },
          {
            thread_id: 2,
            user_id: 2,
            title: "velit corporis sint",
            subject: "Aut a est perspiciatis velit. Est culpa eum reprehenderit nihil itaque. Qui occaecati nisi nostrum placeat.",
            created: new Date(Date.now())
          },
          {
            thread_id: 3,
            user_id: 1,
            title: "sint velit modi. Rem qui tempora maxime aliquid maxime.",
            subject: "",
            created: new Date(Date.now())
          },
          {
            thread_id: 4,
            user_id: 3,
            title: "alsf jia nlkds ina",
            subject: "lorum ipsum tempora maxime aliquid maxime. Molestiae doloremque vel est vero consequatur corrupti. Consectetur sint cum voluptatem voluptatem autem aspernatur magni.",
            created: new Date(Date.now())
          },
    ]);
  };