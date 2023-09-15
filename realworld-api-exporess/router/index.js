const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('get Hello World')
})

router.post('/', (req, res) => {
  res.send('post Hello World')
})

module.exports = router