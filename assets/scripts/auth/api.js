const config = require('../config')
const store = require('../store')

const signUp = function() {
  //remove the console.log before finished, this is only to test
  console.log(data)
  return $.ajax ({
    method: 'POST',
    url: config.apiUrl + '/sign-up/',
    data: data
  })
}

module.exports = {
  signUp
}
