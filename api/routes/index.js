const bodyParser = require('body-parser')

module.exports = app => {
    app.use(bodyParser.json())

    app.get('/health-check', (req, res) => 
        res
        .status(200)
        .send({ message: 'ok'})
    )

    app.get('/', (req, res) => res.send('hi'))
}