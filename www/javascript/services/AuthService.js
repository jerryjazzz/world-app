//AuthService (made for Login)

expats.factory('AuthService', function ($http, Session, ApiEndpoint) {
  var authService = {};
 
  authService.login = function (credentials) {
    return $http
      .post(ApiEndpoint.url, credentials)
      .then(function (res) {
        var number = Math.floor(Math.random() * (25 - 1) + 1);
        Session.create(res.data.auth_id, res.data.user_id, res.data.user_role,
        res.data.cities[number].country, res.data.cities[number].city, res.data.cities[number].presentation,
        res.data.cities[number].latitude, res.data.cities[number].longitude, res.data.cities[number].edu_lat,
        res.data.cities[number].edu_long,res.data.cities[number].cult_lat,res.data.cities[number].cult_long);
        return res.data;
      });
  };
 
  authService.isAuthenticated = function () {
    return !!Session.userId;
  };
 
  authService.isAuthorized = function (authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (authService.isAuthenticated() &&
      authorizedRoles.indexOf(Session.userRole) !== -1);
  };

  if (!authService.isAuthorized) {
    authService.notAuthenticated = function () {
      return true;
    };
  }

  return authService;
})