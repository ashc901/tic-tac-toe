'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  $('#game-board').hide()
  //why did this work this time? it didn't work for the sign out button, just broke the function?????
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#new-game').on('click', gameEvents.onNewGame)
  $('#game-board').on('click', gameEvents.onMove)
  // $('#new-game').on('click', gameEvents.onReset)
})
