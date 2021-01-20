const express = require('express')
const app = express()
const PORT = 3000

const useApiController = require("./controllers/apiController")
useApiController(app)

const useAppController = require("./controllers/appController")
useAppController(app)

app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`Dev Academy 2021 app listenig at localhost://${PORT}`)
})