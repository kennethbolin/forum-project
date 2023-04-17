const knex = require('../knex');

exports.deleteThread = async (thread_id) => {
  await knex('thread')
    .where({ thread_id })
    .delete()
}

exports.updateThreadService = async (thread_id, updatedThreadData) => {
  await knex('thread')
    .where({ thread_id })
    .update(updatedThreadData)

  const updatedThread = await knex('thread').where({ thread_id }).first();
  return updatedThread
}