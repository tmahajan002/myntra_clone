const showResponse = (status, message, data = null, other = null, code = null) => {
    let response = {}
    response.status = status
    response.message = message
    if (data !== null) {
        response.data = data
    }
    if (other !== null) {
        response.other = other
    }
    if (code !== null) {
        response.code = code
    }
    return response;
}
const showOutput = (res, response, code) => {
    delete response.code;
    res.status(code).json(response);
}
const validateParams = (request, feilds) => {
    var postKeys = [];
    var missingFeilds = [];
    for (var key in request.body) {
        postKeys.push(key);
    }
    for (var i = 0; i < feilds.length; i++) {
        if (postKeys.indexOf(feilds[i]) >= 0) {
            if (request.body[feilds[i]] == "")
                missingFeilds.push(feilds[i]);
        } else {
            missingFeilds.push(feilds[i]);
        }
    }
    if (missingFeilds.length > 0) {
        let response = showResponse(false, `Following fields are required : ${missingFeilds}`)
        return response;
    }
    let response = showResponse(true, ``)
    return response;
}

module.exports = {
    validateParams,
    showResponse,
    showOutput
}