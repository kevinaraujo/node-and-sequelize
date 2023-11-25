const db = require('../models')

class PersonController {
    static async getAll(req, res) {
        try {
            const data = await db.People.findAll()

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

module.exports = PersonController