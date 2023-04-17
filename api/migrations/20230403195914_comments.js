/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('comment', function(table) {
  
        table.increments('comment_id')
          .primary()
          .unsigned()
          .unique()
          .notNullable()
        table.integer('user_id')
          .unsigned()
          .references('user_id')
          .inTable('user')
          .notNullable()
        table.integer('thread_id')
          .unsigned()
          .references('thread_id')
          .inTable('thread')
          .notNullable()
        table.text('content').notNullable()
        table.timestamp('created').notNullable().defaultTo(knex.fn.now())
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('comment')
};
