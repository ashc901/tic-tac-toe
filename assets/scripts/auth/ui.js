const store = require('../store')


const onSignUpSuccess = function (response) {
  $('#message').text("Look at you creatin' an account!")
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text('Woowoo! You logged in!')
  $('#sign-in').trigger('reset')
//  $('#change-password').show()
//  $('#sign-out').show()
//  $('#sign-up').hide()
//  $('#sign-in').hide()
}

const onError = function(err) {
  console.log(err)
  $('#message').text("Whoopsie doodle, there's been an error.")
}
module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onError
}
