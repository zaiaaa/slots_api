const usersModel = require('../model/usersModel')

class UsersController{
    get(req, res){
        const listaUsers = usersModel.getUsers()

        listaUsers.then(users => res.status(200).json(users))
        .catch(err => res.status(400).json(err))
    }

    login(req, res){
        const {user} = req.body
        const {password} = req.body

        console.log(user)

        const loginUser = usersModel.login(user, password)

        loginUser.then(users => res.status(200).json(users))
        .catch(err => res.status(400).json(err))
    }
}

module.exports = new UsersController();