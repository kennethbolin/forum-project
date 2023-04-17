const { removeThread, updateThread } = require('../controller/singleThread');

const singleThread = (app) => {

  app.delete('/thread/:thread_id', removeThread)
  app.put('/thread/:thread_id', updateThread)

};

module.exports = singleThread;
