const {Router} = require('express')
const router = Router()
const controller = require('../controller/usersController')

router.get('/users', (req, res) => {
    controller.get(req, res)
})

module.exports = router