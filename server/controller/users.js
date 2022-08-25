var Users = require('../utils/Users');
var helpers = require('../helpers');
const moment = require('moment')

const UserController = {
    register: async (req, res) => {
        let requiredFields = ['name', 'email', 'password'];
        let validator = helpers.validateParams(req, requiredFields);
        if (!validator.status) {
            return res.status(203).json(validator.message)
        }
        let response = await Users.register(req.body)
        return res.json(response)
    },
    login: async (req, res) => {
        let requiredFields = ['email', 'password'];
        let validator = helpers.validateParams(req, requiredFields);
        if (!validator.status) {
            return helpers.showOutput(res, helpers.showResponse(false, validator.message), 203);
        }
        let result = await Users.login(req.body);
        return helpers.showOutput(res, result, result.code);
    },
}

module.exports = {
    ...UserController
}