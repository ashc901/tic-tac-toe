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

const onMove = function(event) {
  if(store.currentPlayer === 'X'){
    $('#game-message').text('Turn: 0')
  }else {
    $('#game-message').text('Turn: X')
  }

  const gameIndex = event.target.id
  console.log(gameIndex)
  const cell = $(event.target)
  if (cell.text() === '') {
    console.log(store.cells)
    cell.text(store.currentPlayer)
    store.cells[gameIndex] = store.currentPlayer
//console.log(store)

//using boolean logic to check if it's an empty array
//(store.cells[at index] && basically checks if it's "true" meaning it has an x or o in the index), comes back false if it's empty because ''(emptystring) is falsey
    if(store.cells[0] && (store.cells[0] === store.cells[3] && store.cells[0] === store.cells[6])){
      //tells the store to change to true so that the game will be over
      //store.over = true
      if (store.currentPlayer === 'X'){
        $('#game-message').text('X won!')
      } else {
        $('#game-message').text('O won!')
      }

    } else if (store.cells[0] && (store.cells[0] === store.cells[1] && store.cells[0] === store.cells[2])) {
      //store.over = true
    if (store.currentPlayer === 'X'){
      $('#game-message').text('X won!')
    } else {
      $('#game-message').text('O won!')
    }

  } else if (store.cells[0] && (store.cells[0] === store.cells[4] && store.cells[0] === store.cells[8])) {
    //store.over = true
    if (store.currentPlayer === 'X'){
      $('#game-message').text('X won!')
    } else {
      $('#game-message').text('O won!')
    }

  } else if (store.cells[1] && (store.cells[1] === store.cells[4] && store.cells[1] === store.cells[7])) {
    //store.over = true
    if (store.currentPlayer === 'X'){
      $('#game-message').text('X won!')
    } else {
      $('#game-message').text('O won!')
    }

  } else if (store.cells[2] && (store.cells[2] === store.cells[5] && store.cells[2] === store.cells[8])) {
    //store.over = true
    if (store.currentPlayer === 'X'){
      $('#game-message').text('X won!')
    } else {
      $('#game-message').text('O won!')
    }

  } else if (store.cells[2] && (store.cells[2] === store.cells[4] && store.cells[2] === store.cells[6])) {
    //store.over = true
    if (store.currentPlayer === 'X'){
      $('#game-message').text('X won!')
    } else {
      $('#game-message').text('O won!')
    }

  } else if (store.cells[3] && (store.cells[3] === store.cells[4] && store.cells[3] === store.cells[5])) {
    //store.over = true
    if (store.currentPlayer === 'X'){
      $('#game-message').text('X won!')
    } else {
      $('#game-message').text('O won!')
    }

  } else if (store.cells[6] && (store.cells[6] === store.cells[7] && store.cells[6] === store.cells[8])){
  //  store.over = true
    if (store.currentPlayer === 'X'){
      $('#game-message').text('X won!')
    } else {
      $('#game-message').text('O won!')
    }

  } else if(store.cells[0] && store.cells[1] && store.cells[2] && store.cells[3] && store.cells[4] && store.cells[5] && store.cells[6] && store.cells[7] && store.cells[8]){
  //  store.over = true
      $('#game-message').text("It's a draw!")
    }


    api.newMove(gameIndex, store.currentPlayer)
      .then(ui.onMoveSuccess)
      .catch(ui.onError)



  const value = $(event.target).text()
} else {
  //for some reason I couldn't target the onError function that was already written
  $('#game-message').text("That's illegal!")
}

}
// const over = function (onMove) {
//   if (store.over = true)
//   currentPlayer = 'X'
// }
// let currentPlayer = 'X'
//
// // const onMoveChange = function() {
// //   if (store.over = false){
// //     store.currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
// //   }
// // }
//
//let currentPlayer = 'X'



//     //store in the array in store.js




module.exports = {
  onNewGame,
  onMove
}
