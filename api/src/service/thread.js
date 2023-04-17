const knex = require('../knex')

exports.showThread = async (thread) => {
//retrieve the title, subject, and created timestamp from the thread table
console.log(thread)
    const forum = await knex('thread')
        .select('thread_id', 'title', 'subject', 'created')

    console.log(forum)
    return forum

}

exports.addThread = async ({ title, subject }) => {
    const [newThread] = await knex('thread')
      .insert({ title, subject })
      .returning(['thread_id', 'title', 'subject']);
    
    return newThread;
  };
  