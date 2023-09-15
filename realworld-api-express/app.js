const express = require('express')
const morgan = require("morgan")
const cors = require('cors')

const router = require('./router')


const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use('/api', router)

const PORT = process.env.PORT || 3000

app.use(require('./middleware/error-handler')())


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})