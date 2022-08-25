let Users = require('../../model/Users')
let jwt = require('jsonwebtoken')
let Messages = require("./message");
let helpers = require('../../helpers')
let md5 = require('md5')
const moment = require('moment')

const UserUtil = {
    register: async (data) => {
        console.log(data)
        try {
            let { email, name, password, phone_no } = data;
            let queryObject = { email, status: { $ne: 2 } }
            let email_exist = await Users.findOne(queryObject, '');
            if (email_exist) {
                //send OTP
                if (email_exist.status == 0) {
                    return helpers.showResponse(false, 'Your account has been deactivated by admin', null, null, 200);
                }
                else {
                    return helpers.showResponse(false, Messages.EMAIL_ALREADY, null, null, 200);
                }
            } else {
                let newObj = {
                    email,
                    phone_no,
                    name,
                    password: md5(password),
                    created_at: moment().unix()
                };
                let result = await Users.create(newObj);
                if (result) {
                    let token = jwt.sign({ user_id: result._id }, 'sts@sh@#2021', {
                        expiresIn: '2h'
                    });
                    let other = { token };
                    return helpers.showResponse(true, Messages.REGISTER_SUCCESS, result, other, 200);
                }
                return helpers.showResponse(false, Messages.REGISTER_FAILED, null, null, 200);
            }
        }
        catch (err) {
            console.log(err)
            return { status: false, message: err }
        }
    },
    login: async (data) => {
        let { email, password } = data
        console.log(data)
        let queryObject = {
            email,
            password: md5(password),
            status: 1
        }
        let result = await Users.findOne(queryObject, '-password');
        console.log(result)
        if (result) {
            let token = jwt.sign({ user_id: result._id }, 'sts@sh@#2021', {
                expiresIn: '2h'
            });
            let other = { token };
            return helpers.showResponse(true, Messages.LOGIN_SUCCESS, result, other, 200);
        }
        return helpers.showResponse(false, Messages.LOGIN_FAILURE, null, null, 200);
    },
}

module.exports = {
    ...UserUtil
}