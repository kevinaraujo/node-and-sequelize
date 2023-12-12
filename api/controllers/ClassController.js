const db = require("../models")

class ClassController {
    static async getAll(req, res) {
        try {
            const data = await db.Classes.findAll()

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

module.exports = ClassController