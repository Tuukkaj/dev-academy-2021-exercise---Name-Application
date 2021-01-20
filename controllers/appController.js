const NAMES = require("../data/names.json").names
const path = require('path');

function getMainView(req, res) {
  return res.sendFile(path.join(__dirname, "../public/", "html/app.html"))
}

const PREFIX = "/"
module.exports = function useApiController(app) {
    app.get(PREFIX, getMainView)
}