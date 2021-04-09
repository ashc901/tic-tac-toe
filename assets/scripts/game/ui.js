const store = require('../store')

const onNewGameSuccess = function (data) {
  store.game = data.game
  console.log(data.game._id)
  console.log(data.game.cells)
  $('#message').text("Woooaaahhh, you wanna GO?!")
  // should I hide the change password until after the game is over? come back to this
  $('#game-board').show().trigger('reset')
  //$('#game-board').trigger('reset')
  $('.col').text('')
}
// const index = event.target.id
// const cell = $(event.target)

const onMoveSuccess = function (response) {
  console.log('click')
  store.game = response.game
console.log(response)
const cell = response.game.cells
//store the move in the array
//after a game is won, and new game button is clicked, current player needs to be set to x
const {currentPlayer} = store

  


}


module.exports = {
  onNewGameSuccess,
  onMoveSuccess
}
