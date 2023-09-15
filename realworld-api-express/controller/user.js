

// 用户注册  
exports.register = async (req, res, next) => {
  try {
    console.log(req.body)
    /**
     * 获取请求体数据
     * 数据验证
     *  基本数据验证
     *  业务数据验证
     * 验证通过，将数据保存到数据库
     * 发送成功响应
     */

    res.send('register')
  } catch (err) {
    next(err)
  }
}

// 用户登陆
exports.login = async (req, res, next) => {

  try {
    JSON.parse('wqhqwwqqwewjwqbkqewbkqewbk')
    // 处理请求
    res.send('login')
  } catch (err) {
    next(err)
  }
}

// 获取当前用户
exports.getCurrentUser = async (req, res, next) => {
  try {
    // 处理请求
    res.send('getCurrentUser')
  } catch (err) {
    next(err)
  }
}

// 更新用户信息
exports.updateCurrentUser = async (req, res, next) => {
  try {
    // 处理请求
    res.send('updateCurrentUser')
  } catch (err) {
    next(err)
  }
}

// 获取指定用户资料
exports.getUserProfile = async (req, res, next) => {
  try {
    // 处理请求
    res.send('getUserProfile')
  } catch (err) {
    next(err)
  }
}

// 关注用户
exports.followUser = async (req, res, next) => {
  try {
    // 处理请求
    res.send('followUser')
  } catch (err) {
    next(err)
  }
}

// 取消关注用户
exports.unfollowUser = async (req, res, next) => {
  try {
    // 处理请求
    res.send('unfollowUser')
  } catch (err) {
    next(err)
  }
}