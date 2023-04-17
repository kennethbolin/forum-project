//import routes
const root = require('./root')
const calender = require('./calender')
const comment = require('./comment')
const thread = require('./thread')
const user = require('./user')
const singleThread = require('./singleThread')



const router = (app) => {

    root(app)
    calender(app)
    comment(app)
    thread(app)
    user(app)
    singleThread(app)

}

module.exports = router