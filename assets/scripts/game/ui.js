const store = require('../store')

const onNewGameSuccess = function (data) {
  store.game = data.game
  console.log(data.game._id)
  console.log(data.game.cells)
  $('#message').text("Woooaaahhh, you wanna GO?!")
  // should I hide the change password until after the game is over? come back to this
  $('#game-board').show()
}

const onMoveSuccess = function () {
  console.log('click')

  const cell = $(event.target)
  cell.text(currentPlayer)



}
module.exports = {
  onNewGameSuccess,
  onMoveSuccess
}
