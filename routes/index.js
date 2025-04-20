const aposta = require('./apostaRoute')
const users = require('./usersRoute')


module.exports = (app, express) => {
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(aposta)
    app.use(users)
}