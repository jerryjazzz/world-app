// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var expats = angular.module('expats', ['ionic', 'angucomplete', 'formAutofillFix', 'loginDialog', 'ngMap', 'chart.js', 'monospaced.elastic', 'angularMoment', 'ionicrating' , 'ellipsis'])

expats.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  })
})

//for rating system
expats.constant('ratingConfig', {
    max: 5,
    stateOn: null,
    stateOff: null
})

expats.constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})

expats.constant('USER_ROLES', {
  all: '*',
  admin: 'admin',
  editor: 'editor',
  guest: 'guest'
})

//weather predection. Remember to update credit card for >1000 daily requests.
expats.constant('FORECASTIO_KEY', 'bc0c1f8cdcd2a2b5d156db4a2daa125a')

expats.constant('ApiEndpoint', {
  url: 'http://localhost:8100/apis'
})

expats.constant('WikiEndpoint', {
  url: 'http://localhost:8100/wikipedia'
})