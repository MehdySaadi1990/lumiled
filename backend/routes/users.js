const express= require('express')
const router= express.Router()

const userCtrl = require('../controllers/users')

router.post('/login', userCtrl.login)
router.post('/signin', userCtrl.signIn)
router.get('/', userCtrl.getUsers)
router.delete('/deleteUser', userCtrl.deleteUser)

module.exports = router