const store = require('../store')


const onSignUpSuccess = function (response) {
  $('#message').text("Look at you creatin' an account!")
}
// modify class selection to better fit my coodin' needs
// before it was selecting an ID, now an overall class
// see html comments, it got weird
const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text('Woowoo! You logged in!')
  $('#sign-in').trigger('reset')
  $('.signed-in').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.etc').hide()
  $('.game').show()
}

const onChangePasswordSuccess = function (){
  $('#message').text("Good job changin' your dang ole password" )
  $('#change-password').trigger('reset')

}

const onSignOutSuccess = function () {
  $('#message').text("Awe, dip. You're leavin' me?")
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  store.user = null
  $('#game').hide()
}

const onError = function(err) {
  console.log(err)
  $('#message').text("Whoopsie doodle, there's been an error.")
}
module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onError
}
