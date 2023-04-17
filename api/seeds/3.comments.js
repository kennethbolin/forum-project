/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    //const bcrypt = require('bcrypt')
   
    await knex('comment').insert([
        {
            comment_id: 1,
            user_id: 1,
            thread_id: 1,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            created: new Date(Date.now())
          },
          {
            comment_id: 2,
            user_id: 2,
            thread_id: 2,
            content: "Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam accumsan justo velit, eu suscipit mi imperdiet quis.",
            created: new Date(Date.now())
          },
          {
            comment_id: 3,
            user_id: 3,
            thread_id: 3,
            content: "Pellentesque dictum velit quis eros ultricies, sit amet auctor velit dapibus.",
            created: new Date(Date.now())
          },
          {
            comment_id: 4,
            user_id: 1,
            thread_id: 4,
            content: "Nam fermentum lorem sed mi elementum, eget laoreet purus auctor.",
            created: new Date(Date.now())
          },
          {
            comment_id: 5,
            user_id: 3,
            thread_id: 1,
            content: "Cras quis magna non velit consectetur imperdiet id eget purus.",
            created: new Date(Date.now())
          }
    ]);
  };