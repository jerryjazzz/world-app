// reviewController

expats.controller('reviewController', function($scope, $stateParams, ratingConfig){

    if ($stateParams.id == 1){
      $scope.date = 'March 14th, 2014';
      $scope.autor = 'Petronila Cienfuegos';
      $scope.content = 'Review 1, I know this is an old question, but it took me some time to sort this out given the sparse Angular documentation. The RouteProvider and routeParams is the way to go. The route wires up the URL to your Controller/View and the routeParams can be passed into the controller. ';
      $scope.rate = 1;
      $scope.max = 5;
      $scope.area = 'General';
    }
    else if ($stateParams.id == 2){
      $scope.date = 'April 2dn, 2015';
      $scope.autor = 'Seprefundio Perezdiaz';
      $scope.content = 'Review 2, I know this is an old question, but it took me some time to sort this out given the sparse Angular documentation. The RouteProvider and routeParams is the way to go. The route wires up the URL to your Controller/View and the routeParams can be passed into the controller. ';
      $scope.rate = 4;
      $scope.max = 5;
      $scope.area = 'Education';
    }

})