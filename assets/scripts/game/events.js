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
console.log(store.game)
const onMove = function(event) {
  console.log("this is the new game\n", store.game.cells)
  console.log("===")
  console.log("game index", gameIndex)
  console.log("====")
  console.log("store current player", store.currentPlayer)
  // if (store.game.over = false){
    if(store.currentPlayer === 'X'){

      $('#game-message').text('Turn: 0')
    }else {
      $('#game-message').text('Turn: X')
    }
//  }

  const gameIndex = event.target.id
  console.log(gameIndex)
  const cell = $(event.target)
  if (cell.text() === '') {
    console.log(store.game.cells)
    cell.text(store.currentPlayer)

    store.game.cells[gameIndex] = store.currentPlayer
//console.log(store)

//using boolean logic to check if it's an empty array
//(store.game.cells[at index] && basically checks if it's "true" meaning it has an x or o in the index), comes back false if it's empty because ''(emptystring) is falsey
    if(store.game.cells[0] && (store.game.cells[0] === store.game.cells[3] && store.game.cells[0] === store.game.cells[6])){
      //tells the store to change to true so that the game will be over
      if (store.currentPlayer === 'X'){
        store.game.over = true
        $('#game-message').text('X won!')
      } else {
        store.game.over = true
        $('#game-message').text('O won!')
      }

    } else if (store.game.cells[0] && (store.game.cells[0] === store.game.cells[1] && store.game.cells[0] === store.game.cells[2])) {
    if (store.currentPlayer === 'X'){
      store.game.over = true
      $('#game-message').text('X won!')
    } else {
      store.game.over = true
      $('#game-message').text('O won!')
    }

  } else if (store.game.cells[0] && (store.game.cells[0] === store.game.cells[4] && store.game.cells[0] === store.game.cells[8])) {
    if (store.currentPlayer === 'X'){
      store.game.over = true
      $('#game-message').text('X won!')
    } else {
      store.game.over = true
      $('#game-message').text('O won!')
    }

  } else if (store.game.cells[1] && (store.game.cells[1] === store.game.cells[4] && store.game.cells[1] === store.game.cells[7])) {
    if (store.currentPlayer === 'X'){
      store.game.over = true
      $('#game-message').text('X won!')
    } else {
      store.game.over = true
      $('#game-message').text('O won!')
    }

  } else if (store.game.cells[2] && (store.game.cells[2] === store.game.cells[5] && store.game.cells[2] === store.game.cells[8])) {
    if (store.currentPlayer === 'X'){
      store.game.over = true
      $('#game-message').text('X won!')
    } else {
      store.game.over = true
      $('#game-message').text('O won!')
    }

  } else if (store.game.cells[2] && (store.game.cells[2] === store.game.cells[4] && store.game.cells[2] === store.game.cells[6])) {
    if (store.currentPlayer === 'X'){
      store.game.over = true
      $('#game-message').text('X won!')
    } else {
      store.game.over = true
      $('#game-message').text('O won!')
    }

  } else if (store.game.cells[3] && (store.game.cells[3] === store.game.cells[4] && store.game.cells[3] === store.game.cells[5])) {
    if (store.currentPlayer === 'X'){
      store.game.over = true
      $('#game-message').text('X won!')
    } else {
      store.game.over = true
      $('#game-message').text('O won!')
    }

  } else if (store.game.cells[6] && (store.game.cells[6] === store.game.cells[7] && store.game.cells[6] === store.game.cells[8])){
    if (store.currentPlayer === 'X'){
      store.game.over = true

      $('#game-message').text('X won!')
    } else {
      store.game.over = true
      $('#game-message').text('O won!')
    }

  } else if(store.game.cells[0] && store.game.cells[1] && store.game.cells[2] && store.game.cells[3] && store.game.cells[4] && store.game.cells[5] && store.game.cells[6] && store.game.cells[7] && store.game.cells[8]){
      $('#game-message').text("It's a draw!")
      store.game.over = true
    }


    api.newMove(gameIndex, store.currentPlayer, store.game.over)
      .then(ui.onMoveSuccess)
      .catch(ui.onError)
  const value = $(event.target).text()
} else {
  //for some reason I couldn't target the onError function that was already written
  $('#game-message').text("That's illegal!")
}
if (store.game.over = false){
  $('#message').text('Wanna go again?')
  return
}
}
// const onWin = function () {
//   api.newGame()
//     .then(ui.onWinSuccess)
//     .catch(ui.onError)
//
//
//   }



module.exports = {
  onNewGame,
  onMove,
  //onWin
}
