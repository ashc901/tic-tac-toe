const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store')
//
const onNewGame = function(event) {
  event.preventDefault()

  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onError)
}
//need to access index

let currentPlayer= 'X'

const onMove = function(event) {


  const gameIndex = event.target.id
  console.log(gameIndex)
  const cell = $(event.target)
  if (cell.text() === '') {
    cell.text(currentPlayer)
    store.cells[gameIndex] = store.currentPlayer
console.log(store)
//using boolean logic to check if it's an empty array
    if(store.cells[0] && (store.cells[0] === store.cells[3] && store.cells[0] === store.cells[6])){
      store.over = true
      if (currentPlayer === 'X'){
        $('#message').text('X won!')
      } else {
        $('message').text('O won!')
      }

    } else if (store.cells[0] && (store.cells[0] === store.cells[1] && store.cells[0] === store.cells[2])) {
      store.over = true
    if (currentPlayer === 'X'){
      $('#message').text('X won!')
    } else {
      $('message').text('O won!')
    }

  } else if (store.cells[0] && (store.cells[0] === store.cells[4] && store.cells[0] === store.cells[8])) {
    store.over = true
    if (currentPlayer === 'X'){
      $('#message').text('X won!')
    } else {
      $('message').text('O won!')
    }

  } else if (store.cells[1] && (store.cells[1] === store.cells[4] && store.cells[1] === store.cells[7])) {
    store.over = true
    if (currentPlayer === 'X'){
      $('#message').text('X won!')
    } else {
      $('message').text('O won!')
    }

  } else if (store.cells[2] && (store.cells[2] === store.cells[5] && store.cells[2] === store.cells[8])) {
    store.over = true
    if (currentPlayer === 'X'){
      $('#message').text('X won!')
    } else {
      $('message').text('O won!')
    }

  } else if (store.cells[2] && (store.cells[2] === store.cells[4] && store.cells[2] === store.cells[6])) {
    store.over = true
    if (currentPlayer === 'X'){
      $('#message').text('X won!')
    } else {
      $('message').text('O won!')
    }

  } else if (store.cells[3] && (store.cells[3] === store.cells[4] && store.cells[3] === store.cells[5])) {
    store.over = true
    if (currentPlayer === 'X'){
      $('#message').text('X won!')
    } else {
      $('message').text('O won!')
    }

  } else if (store.cells[6] && (store.cells[6] === store.cells[7] && store.cells[6] === store.cells[8])){
    store.over = true
    if (currentPlayer === 'X'){
      $('#message').text('X won!')
    } else {
      $('message').text('O won!')
    }

  } else if(store.cells[0] && store.cells[1] && store.cells[2] && store.cells[3] && store.cells[4] && store.cells[5] && store.cells[6] && store.cells[7] && store.cells[8]){
    store.over = true
      $('#message').text("It's a draw!")
    }
    api.newMove(gameIndex, currentPlayer)
      .then(ui.onMoveSuccess)
      .catch(ui.onError)

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    store.currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
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
