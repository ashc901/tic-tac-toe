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

// const onMove = function(event) {
//   event.preventDefault()
//
//
//   api.newMove()
//     .then(ui.onMoveSuccess)
//     .catch(ui.onError)
// }


module.exports = {
  onNewGame,
  //onMove
}
