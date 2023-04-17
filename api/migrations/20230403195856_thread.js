/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('thread', function(table) {
  
        table.increments('thread_id')
          .primary()
          .unsigned()
          .unique()
          .notNullable()
        table.integer('user_id')
          .unsigned()
          .references('user_id')
          .inTable('user')
          .notNullable()
        table.varchar('title', 300).notNullable()
        table.text('subject')
        table.timestamp('created').notNullable().defaultTo(knex.fn.now())
        
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('thread')
};
