let md5 = require("md5");
let Admin = require('../../model/Admin');
var Messages = require("./message");
let jwt = require('jsonwebtoken');
let helpers = require('../../helpers')

const adminUtils = {
    login: async (data) => {
        let { email, password } = data;
        console.log(data)
        let where = {
            email: email,
            password: md5(password),
            status: { $eq: 1 }
        }
        let result = await Admin.findOne(where, '-password');
        if (result) {
            let token = jwt.sign({ admin_id: result._id }, 'sts@sh@#2021', {
                expiresIn: '2h'
            });
            let data = { token: token, time:'2h' };
            return helpers.showResponse(true, Messages.ADMIN_LOGIN_SUCCESS, data, null, 200);
        }
        return helpers.showResponse(false, Messages.ADMIN_LOGIN_FAILED, null, null, 200);
    },
}

module.exports = {
    ...adminUtils
}