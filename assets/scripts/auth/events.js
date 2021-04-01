const api = require('./api')

const ui = require('./ui')

const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = function(event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}

module.exports = {
  onSignUp
}
