const { registration,login} = require('../../controller/userController.js')
const {Router} = require("express");
const router = Router()

router.post('/registartion',registration)

router.post('/login',login)


module.exports = router