const root = (app) => {
    app.get('/', (req, res) => {
      res.json({message: 'Hello Forum World!'})
    })
  }
  
  module.exports = root