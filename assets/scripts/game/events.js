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
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  } else {
    ui.onMoveSuccess()
  }
  const value = $(event.target).text()
  if(currentPlayer === 'X'){
    $('#message').text('Turn: X')
  } else {
    $('#message').text('Turn: 0')
  }

  api.newMove()
    .then(ui.onMoveSuccess)
    .catch(ui.onError)
  }
  // const index = event.target.id
  //   const cell = $(event.target)
  //   if (cell.text() === '') {
  //     cell.text(currentPlayer)
  //     if(currentPlayer === 'X') {
  //       let currentPlayer ='O'
  //       cell.text(currentPlayer)
  //     } else {
  //       let currentPlayer = 'X'
  //     }





module.exports = {
  onNewGame,
  onMove
}
