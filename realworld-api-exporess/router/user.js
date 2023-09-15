const express = require('express')
const userCtrl = require('../controller/user')
const router = express.Router()

// 用户登陆
router.post('/users/login',userCtrl.login )

// 用户注册
router.post('/users', userCtrl.register)
// 获取当前登陆用户
router.get('/user', userCtrl.getCurrentUser)

// 更新用户信息
router.post('/user', userCtrl.updateCurrentUser)



module.exports = router