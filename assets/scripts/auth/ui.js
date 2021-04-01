const store = require('../store')


const onSignUpSuccess = function (response) {
  $('#message').text("Look at you creatin' an account!")
}

const onError = function(err) {
  console.log(err)
  $('#message').text("Whoopsie doodle, there's been an error.")
}
module.exports = {
  onSignUpSuccess,
  onError
}
