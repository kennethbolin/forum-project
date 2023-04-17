const knex = require('../knex')
//get
exports.showComments = async (thread_id) => {
//retrieve the title, subject, and created timestamp from the thread table
    const commentData = await knex('comment')
        .select('user_id', 'thread_id', 'content', 'created')
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
exports.deleteComment = async (thread_id, comment_id) => {
    await knex('comment')
      .where({ thread_id, comment_id })
      .delete()
  }

//post
exports.createComment = async (newComment) => {
    try {
      const createdComment = await knex("comments")
        .insert(newComment)
        .returning("*")
      return createdComment[0]
    } catch (error) {
      throw new Error("Error creating comment")
    }
  }