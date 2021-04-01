const api = require('./api')

const ui = require('./ui')

const getFormFields = require('../../'../lib/get-form-fields.js)

const onSignUp = function(event) {
  event.preventDefaul()
  const form = event.target
  const data = getFormFields(form)

  api.signIn(ui.onSignUpSuccess)
  .catch(ui.onError)
}

module.exports = [
  onSignUp
]
