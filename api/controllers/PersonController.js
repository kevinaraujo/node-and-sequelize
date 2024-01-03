const { json } = require('body-parser')
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

    static async updatePerson(req, res) {
        try {
            const { id } = req.params

            await db.People.update(req.body, {
                where: {
                    id: Number(id)
                }
            })

            const data = await db.People.findOne({
                where: {
                    id: Number(id)
                }
            })

            return res
                .status(200)
                .json(data)
 
        } catch(err) {
            return res
                .status(500)
                .json(err.message)
        }
    }

    static async deletePerson(req, res) {
        try {
            const { id } = req.params
            
            await db.People.destroy({ 
                where: {
                    id: Number(id)
                }
            })

            return res
                .status(200)
                .json({ 
                    message: `id ${id} deleted`
                })

        } catch (err) {
            return res
                .status(500)
                .json(err.message)

        }
    }

    static async createRegistration(req, res) {
        try {
            const { studentId } = req.params
            const body = { 
                ...req.body, 
                student_id: Number(studentId)
            }

            const newRegistration = await db.Registrations.create(body)

            return res
                .status(200)
                .json(newRegistration)

        } catch (err) {
            return res
                .status(500)
                .json(err.message)
        }
    }

    static async getRegistration(req, res) {
        try {
            const { studentId, registrationId } = req.params;

            const data = await db.Registrations.findOne({
                where: {
                    id: Number(registrationId),
                    student_id: Number(studentId)
                }
            })

            return res
                .status(200)
                .json(data)
        } catch(err) {
            return res
                .status(500)
                .json(err.message)
        }
    }

    static async updateRegistration(req, res) {
        try {

            const { studentId, registrationId } = req.params;

            await db.Registrations.update(req.body, {
                where: {
                    id: Number(registrationId),
                    student_id: Number(studentId),
                }
            })

            const data = await db.Registrations.findOne({
                where: {
                    id: Number(registrationId)
                }
            })

            return res
                .status(200)
                .json(data)

        } catch (err) {
            return res
                .status(500)
                .json(err.message)
        }
    }

    static async deleteRegistration(req, res) {
        try {

            const { studentId, registrationId } = req.params;

            await db.Registrations.destroy({
                where: {
                   id: Number(registrationId),
                   student_id: Number(studentId) 
                }
            })

            return res
                .status(200)
                .json({
                    message: `id ${registrationId} deleted`
                })

        } catch (err) {
            return res
                .status(500)
                .json(err.message)
        }
    }
}

module.exports = PersonController