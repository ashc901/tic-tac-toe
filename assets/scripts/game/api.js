//this is where you'll reference the "apiUrl + /games"
const config = require('../config')
const store = require('../store')

const newGame = function() {

  return $.ajax({

    method: 'POST',
    url: config.apiUrl + "/games",
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const newMove = function() {
  return $.ajax({

  })
}
module.exports = {
  newGame
}
