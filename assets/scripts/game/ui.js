const store = require('../store')

const onNewGameSuccess = function () {
  

  $('#message').text("Woooaaahhh, you wanna GO?!")
  // should I hide the change password until after the game is over? come back to this
  $('#new-game').show()
}
module.exports = {
  onNewGameSuccess
}
