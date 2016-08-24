// ApplicationController (for login ans session purposes)

expats.controller('ApplicationController', function ($scope,
                                               USER_ROLES,
                                               AuthService, Session) {
  $scope.currentUser = null;
  $scope.userRoles = USER_ROLES;
  $scope.isAuthorized = AuthService.isAuthorized;
  $scope.isLoginPage  = AuthService.notAuthenticated; //identifica si no está autenticado
 
  $scope.setCurrentUser = function (user) {
    $scope.currentUser = user;
  };

  $scope.updateCurrentUser = function () {
  	$scope.currentUser.authid  = Session.id; //actualiza el usuario actual
  	$scope.currentUser.id  = Session.userId;
  	$scope.currentUser.role  = Session.userRole;
    $scope.currentUser.country  = Session.country;
    $scope.currentUser.city  = Session.city;
    $scope.currentUser.presentation  = Session.presentation;
    $scope.currentUser.latitude  = Session.latitude;
    $scope.currentUser.longitude  = Session.longitude;
    $scope.currentUser.edu_lat  = Session.edu_lat;
    $scope.currentUser.edu_long  = Session.edu_long;
    $scope.currentUser.cult_lat  = Session.cult_lat;
    $scope.currentUser.cult_long  = Session.cult_long;
  };

})