const { showComments, updateComment, deleteComment, createComment} = require('../service/comment')

//'get
exports.getComments = async (req, res) => {
   console.log("in the get comments")
  //return the thread data to be called by the fetch
  try {
    const comments = await showComments(req.params.thread_id); // <-- Pass thread_id to showComments
    console.log('comments:', comments)
    res.json(comments)

  } catch (error) {

    console.error(error)
    res.status(500).send("Internal Server Error")
  }
}

// put
exports.updateComment = async (req, res, next) => {
  const { thread_id, comment_id } = req.params
  const updatedComment = req.body

  try {
    const result = await updateComment(thread_id, comment_id, updatedComment)
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
}

// delete
exports.deleteComment = async (req, res) => {
  const { thread_id, comment_id } = req.params
  try {
    const result = await deleteComment(thread_id, comment_id)
    res.status(200).json({ message: "Comment deleted successfully", result })
  } catch (error) {
    res.status(500).json({ message: "Error deleting comment", error })
  }
}


//post
exports.createCommentController = async (req, res) => {
  try {
    const newComment = req.body
    const createdComment = await commentsService.createComment(newComment)
    res.status(201).json(createdComment)
  } catch (error) {
    res.status(500).json({ message: "Error creating comment", error: error })
  }
}