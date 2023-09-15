const express = require('express')
const router = express.Router()

// 用户相关路由
router.use(require('./user'))

// 用户资料相关的路由
router.use('/profiles', require('./profile'))

// 文章相关的路由
router.use('/article', require('./article'))

// 标签相关路由
router.use('/tags', require('./tag'))

module.exports = router