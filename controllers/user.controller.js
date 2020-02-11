var UserService = require('../models/services/user.service')

exports.all = async function (req, res, next) {

    try {
        var users = await UserService.getUsers()
        return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.store = async function (req, res, next) {
    
    try {
        var users = await UserService.storeUsers(req.body)
        return res.status(200).json({ status: 200, data: users, message: "Succesfully Users created" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}