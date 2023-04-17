const { showThread } = require('../service/thread')
const { addThread } = require('../service/thread');

exports.getThread = async (req, res) => {
   console.log("in the get thread")
  //return the thread data to be called by the fetch
  try {
    const thread = await showThread(req.params)
    console.log(thread)
    res.json(thread)
    

  } catch (error) {

    console.error(error)
    res.status(500).send("Internal Server Error")
  }
};

exports.createThread = async (req, res) => {
  try {
    const newThread = await addThread(req.body);
    res.status(201).json(newThread);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
