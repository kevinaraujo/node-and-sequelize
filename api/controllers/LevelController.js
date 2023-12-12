const db = require("../models")

class LevelController {
    static async getAll(req, res) {
        try {
        const data = await db.Levels.findAll()

        return res
            .status(200)
            .json(data)

        } catch (err) {
            return res
                .status(500)
                .json(err.message)
        }
    }

}

module.exports = LevelController