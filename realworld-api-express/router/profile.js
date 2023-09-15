const express = require('express')
const userCtor = require('../controller/user')
const router = express.Router()

// 获取用户资料
router.get('/:username', userCtor.getUserProfile)

// 关注用户
router.post('/:username/follow', userCtor.followUser)

// 取消关注
router.delete('/:username/follow', userCtor.unfollowUser)




module.exports = router