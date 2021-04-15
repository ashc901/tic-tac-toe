const store = require('../store')

const onNewGameSuccess = function (data) {
  store.currentPlayer = 'X'
  store.game = data.game
  console.log(data.game._id)
  console.log("this is the new game\n", store.game.cells)

  console.log("====")
  console.log("store current player", store.currentPlayer)
  $('#message').text("Woooaaahhh, you wanna GO?!")
  // should I hide the change password until after the game is over? come back to this
  $('#game-board').show()
  $('#game-message').show()
  $('#game-message').text('Turn: X')
  $('.col').empty()
  //store.over = false

  //need to make sure it sets back to turn: x
}


const onMoveSuccess = function (response) {
  //console.log('click')
  store.game = response.game
//  console.log(response)
  const cell = response.game.cells
  if (store.currentPlayer === 'X'){

    store.currentPlayer = 'O'
  //  $('#game-message').text(`It is ${store.currentPlayer}'s turn`)
  } else {
    store.currentPlayer = 'X'
  //  $('#game-message').text(`It is ${store.currentPlayer}'s turn`)
  }
//store the move in the array
//after a game is won, and new game button is clicked, current player needs to be set to x

}

const onWinSuccess = function (response) {
  if (store.over = true) {
    $('#message').text('Wanna go again?!')
    store.over = false
  }
}

module.exports = {
  onNewGameSuccess,
  onMoveSuccess,
  onWinSuccess
}
