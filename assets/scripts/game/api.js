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

const newMove = function(gameIndex, currentPlayer) {
  console.log(store.game)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + "/games/" + store.game._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
  data:  {
  game: {
    cell: {
      index: parseInt(gameIndex),
      value: currentPlayer
    },
    over: store.over
  }
}
  })
}
module.exports = {
  newGame,
  newMove
}
