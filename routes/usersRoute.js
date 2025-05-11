const {Router} = require('express')
const router = Router()
const controller = require('../controller/usersController')

router.get('/users', (req, res) => {
    controller.get(req, res)
})

router.post('/login', (req, res) => {
    controller.login(req, res)
})

module.exports = router