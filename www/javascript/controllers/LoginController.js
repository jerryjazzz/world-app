// LoginController (for login ans session purposes)

expats.controller('LoginController', function ($scope, $rootScope, AUTH_EVENTS, AuthService, $state) {
  $scope.credentials = {
    username: '',
    password: ''
  };
  $scope.login = function (credentials) {
    AuthService.login(credentials).then(function (user) {
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      $scope.setCurrentUser(user);
      $scope.updateCurrentUser();
      $state.go('app.country');
    }, function () {
      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
      $state.go('index.register'); //DELETE: change this for message in login!
    });
  };
})