'use strict';

var forecastioWeather = ['$q', '$http', 'FORECASTIO_KEY', 
  function($q, $http, FORECASTIO_KEY) {
  var url = 'https://api.forecast.io/forecast/' + FORECASTIO_KEY + '/';

  return {
    //getAtLocation: function(lat, lng) {
    getCurrentWeather: function(lat, lng) {
      return $http.jsonp(url + lat + ',' + lng + '?callback=JSON_CALLBACK&units=ca');
    }
  }
}];

expats.factory('Weather', forecastioWeather);
