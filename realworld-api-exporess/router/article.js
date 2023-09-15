const express = require('express')
const articleCtor = require('../controller/article')
const router = express.Router()

// 获取文章列表
router.get('/', articleCtor.getArticleList)

// 获取用户关注的作者的文章列表
router.get('/feed', articleCtor.getFeedArticleList)

// 获取文章
router.get('/:slug', articleCtor.getArticle)

module.exports = router