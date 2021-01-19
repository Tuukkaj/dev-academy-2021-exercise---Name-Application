const express = require('express')
const app = express()
const PORT = 3000

const useApiController = require("./controllers/apiController")
useApiController(app)

app.listen(PORT, () => {
  console.log(`Dev Academy 2021 app listenig at localhost://${PORT}`)
})