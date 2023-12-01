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

    static async getPersonById(req, res) {
        const { id } = req.params
        try {
            const person = await db.People.findOne({ 
                where: { 
                    id: Number(id)
                } 
            })

            return res 
                .status(200)
                .json(person)

        } catch (err) {
            return res
                .status(500)
                .json(err.message)
        }
    }

    static async createPerson(req, res) {
        try {
            const newPerson = await db.People.create(req.body)

            return res
                .status(200)
                .json(newPerson)

        } catch(err) {
            return res
                .status(500)
                .json(err.message)
        }
    } 
}

module.exports = PersonController