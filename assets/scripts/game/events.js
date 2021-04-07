const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

//
const onNewGame = function(event) {
  event.preventDefault()

  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onError)
}
//need to access index

let currentPlayer= 'X'

const onMove = function() {
//  event.preventDefault()
  const index = event.target.id
  const cell = $(event.target)
  if (cell.text() === '') {
    cell.text(currentPlayer)
    api.newMove()
      .then(ui.onMoveSuccess)
      .catch(ui.onError)

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    if(currentPlayer === 'X'){
      $('#message').text('Turn: X')
    }else {
      $('#message').text('Turn: 0')
    }

  const value = $(event.target).text()
} else {
  //for some reason I couldn't target the onError function that was already written
  $('#message').text("That's illegal!")
}
}




module.exports = {
  onNewGame,
  onMove,
  currentPlayer
}
