let NAMES = require("../data/names.json").names

function getNames(req, res) {
  return res.json(NAMES)
}

// API task 1
function getNamesPopular(req, res) {
  const popularNames = NAMES.sort(function(a,b) {
      return b.amount - a.amount
  })

  return res.json(popularNames)
}

// API task 2
function getNamesAlphabetical(req, res) {
  const alphabeticalNames = NAMES.sort(function(a,b) {
    return a.name.localeCompare(b.name)
  })

  return res.json(alphabeticalNames)
}

// Api task 3
function getNamesTotal(req, res) {
  let total = 0; 
  NAMES.forEach(name => total += name.amount)

  return res.json({total: total})
}

// API task 4
function getNamesAmout(req, res) {
  const { nameParam } = req.params
  const foundName = NAMES.find(name => name.name === nameParam)

  if(typeof nameParam !== "string" || !foundName) {
    return res.status(404).send(`Name "${nameParam}" not found!`)
  }

  return res.json({amount: foundName.amount})
}

const PREFIX = "/api/"
module.exports = function useApiController(app) {
    app.get(PREFIX + "names", getNames)
    app.get(PREFIX + "names/popular", getNamesPopular)
    app.get(PREFIX + "names/alphabetical", getNamesAlphabetical)
    app.get(PREFIX + "names/total", getNamesTotal)
    app.get(PREFIX + "names/amount/:nameParam", getNamesAmout)
}