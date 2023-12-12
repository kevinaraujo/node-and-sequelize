const { Router } = require('express')

const LevelController = require('../controllers/LevelController')

const router = Router()

router.get('/levels', LevelController.getAll)

module.exports = router