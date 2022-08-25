var Admin = require('../utils/Admin');
var helpers = require('../helpers')

const adminController = {

    login: async (req, res) => {
        let requiredFields = ['email', 'password'];
        let validator = helpers.validateParams(req, requiredFields);
        if (!validator.status) {
            return helpers.showOutput(res, helpers.showResponse(false, validator.message), 203);
        }
        let result = await Admin.login(req.body);
        return helpers.showOutput(res, result, result.code);
    },
}

module.exports = {
    ...adminController
}