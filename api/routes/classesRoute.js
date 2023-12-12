const { Router } = require('express')

const LevelController = require('../controllers/ClassController')

const router = Router()

router.get('/classes', LevelController.getAll)

module.exports = router