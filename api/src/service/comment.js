const knex = require('../knex')
//get
exports.showComments = async (thread_id) => {
//retrieve the title, subject, and created timestamp from the thread table
    const commentData = await knex('comment')
        .select('comment_id', 'user_id', 'thread_id', 'content', 'created')
        .where('thread_id', thread_id)

    console.log(commentData)
    return commentData
}

//put
exports.updateComment = async (thread_id, comment_id, updatedComment) => {
    await knex('comment')
      .where({ thread_id, comment_id })
      .update(updatedComment)
  
    const updatedCommentResult = await knex('comment')
      .where({ thread_id, comment_id })
      .first()
  
    return updatedCommentResult
  }

//delete
exports.destroyComment = async (thread_id, comment_id) => {
    await knex('comment')
      .where({ thread_id, comment_id })
      .delete()
  }

//post
exports.createComment = async (thread_id, content) => {
    try {
      const createdComment = await knex("comment")
        .insert({thread_id, content})
        .returning("*")
      return createdComment[0]
    } catch (error) {
      throw new Error(`Error creating comment: ${error}`)
    }
  }