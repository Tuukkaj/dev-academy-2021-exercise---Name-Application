const path = require('path');

const NAMES = require("../data/names.json").names
const LOCALIZATION = require("../localization/en.json")

function getMainView(req, res) {
  return res.sendFile(path.join(__dirname, "../public/", "html/app.html"))
}

function getMainData(req, res) {

  // Only dummy localization done
  return res.json({
    localization: LOCALIZATION,
    names: NAMES
  })
}

const PREFIX = "/"
module.exports = function useApiController(app) {
    app.get(PREFIX, getMainView),
    app.get("/api/maindata", getMainData)
}