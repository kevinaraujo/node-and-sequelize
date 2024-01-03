const { Router } = require('express')

const PersonController = require('../controllers/PersonController')

const router = Router()

router.get('/people', PersonController.getAll)
router.get('/people/:id', PersonController.getPersonById)
router.post('/people', PersonController.createPerson)
router.put('/people/:id', PersonController.updatePerson)
router.delete('/people/:id', PersonController.deletePerson)
router.get('/people/:studentId/registration/:registrationId', PersonController.getRegistration)
router.post('/people/:studentId/registration', PersonController.createRegistration)
router.put('/people/:studentId/registration/:registrationId', PersonController.updateRegistration)
router.delete('/people/:studentId/registration/:registrationId', PersonController.deleteRegistration)

module.exports = router