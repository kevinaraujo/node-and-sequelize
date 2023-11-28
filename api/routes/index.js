const bodyParser = require('body-parser')
const peopleRotue = require('./peopleRoute') 

module.exports = app => {
    app.use(bodyParser.json())
    app.use(peopleRotue)

    app.get('/', (req, res) => res.send('ok'))
    app.get('/health-check', (req, res) => 
        res
        .status(200)
        .send({ message: 'ok'})
    )
}