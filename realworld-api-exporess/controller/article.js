
// 获取文章列表
exports.getArticleList = (req, res, next) => {
  try {
    // 处理请求
    res.send('getArticleList')
  } catch (err) {
    next(err)
  }
}

// 获取用户关注的作者的我那张列表
exports.getFeedArticleList = (req, res, next) => {
  try {
    // 处理请求
    res.send('getFeedArticleList')
  } catch (err) {
    next(err)
  }
}

// 获取文章
exports.getArticle = (req, res, next) => {
  try {
    // 处理请求
    res.send('getArticle')
  } catch (err) {
    next(err)
  }
}