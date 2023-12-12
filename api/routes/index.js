const bodyParser = require('body-parser')
const peopleRoute = require('./peopleRoute') 
const levelsRoute = require('./levelsRoute') 
const classesRoute = require('./classesRoute') 

module.exports = app => {
    app.use(
        bodyParser.json(),
        peopleRoute,
        levelsRoute,
        classesRoute
    )

    app.get('/', (req, res) => res.send('ok'))
    app.get('/health-check', (req, res) => 
        res
        .status(200)
        .send({ message: 'ok'})
    )
}