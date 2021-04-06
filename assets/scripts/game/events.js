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
const onMove = function(event) {
  event.preventDefault()

  const cell = $(event.target)
  if (cell.text() === ' ' ) {
    cell.text(currentPlayer)
    if(currentPlayer === 'X') {
      let currentPlayer ='O'
    } else {
      let currentPlayer = 'X'
    }

  }


  api.newMove()
    .then(ui.onMoveSuccess)
    .catch(ui.onError)
}


module.exports = {
  onNewGame,
  onMove
}
