//this is where you'll reference the "apiUrl + /games"
const config = require('../config')
const store = require('../store')

const newGame = function() {

  return $.ajax({

    method: 'POST',
    url: config.apiUrl + "/games",
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// const newMove = function() {
//   return $.ajax({
//     method: 'PATCH',
//     url: config.apiUrl + "/games:" + ${ID}
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     }
//   })
// }
module.exports = {
  newGame,
  //newMove
}
