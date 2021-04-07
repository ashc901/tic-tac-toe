const store = require('../store')

const onNewGameSuccess = function (data) {
  store.game = data.game
  console.log(data.game._id)
  console.log(data.game.cells)
  $('#message').text("Woooaaahhh, you wanna GO?!")
  // should I hide the change password until after the game is over? come back to this
  $('#game-board').show()
}

const onMoveSuccess = function (response) {
  console.log('click')
  store.cells = response.cells

}

module.exports = {
  onNewGameSuccess,
  onMoveSuccess
}
