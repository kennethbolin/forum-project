const { getThread, createThread } = require('../controller/thread');

const thread = (app) => {
//get reguest for the thread table at the path /thread
    app.get('/thread', getThread)
    app.post('/thread', createThread)
}

module.exports = thread