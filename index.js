const express = require('express')
const app = express()
var cors = require('cors')

const PORT = 3000

app.use(cors())

const useApiController = require("./controllers/apiController")
useApiController(app)

const useAppController = require("./controllers/appController")
useAppController(app)

app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`Dev Academy 2021 app listenig at localhost://${PORT}`)
})