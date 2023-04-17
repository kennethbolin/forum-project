const { getComments, updateComment, deleteComment, createCommentController } = require('../controller/comment')

const comments = (app) => {
//get reguest for the particular thread comments at a dynamic path 
    app.get('/thread/:thread_id/comments', getComments)
    app.put('/thread/:thread_id/comments', updateComment)
    app.delete('/thread/:thread_id/comments', deleteComment)
    app.post('/thread/:thread_id/comments', createCommentController)
}

module.exports = comments