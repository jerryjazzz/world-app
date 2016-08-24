// AccountController

expats.controller('accountController', function($scope, $timeout){

  //this is the content for the chart
  $scope.labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  $scope.series = ['Collab', 'Info'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

  // Simulate async data update
  $timeout(function () {
    $scope.data = [
      [28, 48, 40, 19, 86, 27, 90],
      [65, 59, 80, 81, 56, 55, 40]
    ];
  }, 3000);

  $scope.message = 'This is my content for Account';
})