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
  store.game.cells = response.cells

  //checking winner
  if(cell[0] === cell[3] && cell[0] === cell[6]){
    if (currentPlayer === 'X'){
      $('#message').text('X won!')
    }
    //$('#message').text('You won!')
  } else if (cell[0] === cell[1] && cell[0] === cell[1]) {
  if (currentPlayer === 'X'){
    $('#message').text('X won!')
  } else {
    $('message').text('O won!')
  }
    //$('#message').text('You won!')
  } else if (cell[0] === cell[4] && cell[0] === cell[8]) {
  if (currentPlayer === 'X'){
    $('#message').text('X won!')
  } else {
    $('message').text('O won!')
  }
  //$('#message').text('You won!')
  } else if (cell[1] === cell[4] && cell[1] === cell[7]) {
  if (currentPlayer === 'X'){
    $('#message').text('X won!')
  } else {
    $('message').text('O won!')
  }
  //$('#message').text('You won!')
  } else if (cell[2] === cell[5] && cell[2] === cell[8]) {
  if (currentPlayer === 'X'){
    $('#message').text('X won!')
  } else {
    $('message').text('O won!')
  }
  //$('#message').text('You won!')
  } else if (cell[2] === cell[4] && cell[2] === cell[6]) {
  if (currentPlayer === 'X'){
    $('#message').text('X won!')
  } else {
    $('message').text('O won!')
  }
  //$('#message').text('You won!')
  } else if (cell[3] === cell[4] && cell[3] === cell[5]) {
  if (currentPlayer === 'X'){
    $('#message').text('X won!')
  } else {
    $('message').text('O won!')
  }
  //$('#message').text('You won!')
  } else if (cell[6] === cell[7] && cell[6] === cell[8]){
  if (currentPlayer === 'X'){
    $('#message').text('X won!')
  } else {
    $('message').text('O won!')
  }
  //$('#message').text('You won!')
  } else {
  //$('#message').text("It's a draw")
  }



}


module.exports = {
  onNewGameSuccess,
  onMoveSuccess
}
