expats.factory('AuthResolver', function ($q, $rootScope, $state) {
  return {
    resolve: function () {
      var deferred = $q.defer();
      var unwatch = $rootScope.$watch('currentUser', function (currentUser) {
        if (angular.isDefined(currentUser)) {
          if (currentUser) {
            deferred.resolve(currentUser);
            //$state.go('app.climate');
          } else {
            deferred.reject();
            //$state.go('index.register');
          }
          unwatch();
        }
      });
      return deferred.promise;
    }
  };
})