const { Router } = require('express')

const PersonController = require('../controllers/PersonController')

const router = Router()

router.get('/people', PersonController.getAll)
router.get('/people/:id', PersonController.getPersonById)
router.post('/people', PersonController.createPerson)

module.exports = router