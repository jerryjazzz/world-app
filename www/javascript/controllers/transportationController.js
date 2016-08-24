// transportController

expats.controller('transportationController', function($scope, $timeout, Session, WikiEndpoint, $http){

  //content for text

  if (Session.city == "New York"){
    var country = "New_York";
  }
  else if (Session.city == "San Francisco"){
    var country = "California";
  }
  else if (Session.city == "Los Angeles"){
    var country = "California";
  }
  else if (Session.city == "Chicago"){
    var country = "Chicago";
  }
  else if (Session.city == "Miami"){
    var country = "Florida";
  }
  else if (Session.city == "Houston"){
    var country = "Texas";
  }
  else if (Session.city == "Madrid"){
    var country = "Spain";
  }
  else if (Session.city == "Barcelona"){
    var country = "Spain";
  }
  else if (Session.city == "Seville"){
    var country = "Spain";
  }
  else if (Session.city == "Sydney"){
    var country = "Australia";
  }
  else if (Session.city == "Melbourne"){
    var country = "Australia";
  }
  else if (Session.city == "Brisbane"){
    var country = "Australia";
  }
  else if (Session.city == "Auckland"){
    var country = "New_Zealand";
  }
  else if (Session.city == "Wellington"){
    var country = "New_Zealand";
  }
  else if (Session.city == "Christchurch"){
    var country = "New_Zealand";
  }
  else if (Session.city == "Toronto"){
    var country = "Canada";
  }
  else if (Session.city == "Montreal"){
    var country = "Canada";
  }
  else if (Session.city == "Vancouver"){
    var country = "Canada";
  }
  else if (Session.city == "Berlin"){
    var country = "Germany";
  }
  else if (Session.city == "Hamburg"){
    var country = "Germany";
  }
  else if (Session.city == "Munich"){
    var country = "Germany";
  }
  else if (Session.city == "Birmingham"){
    var country = "the_United_Kingdom";
  }
  else if (Session.city == "Leeds"){
    var country = "the_United_Kingdom";
  }
  else if (Session.city == "London"){
    var country = "the_United_Kingdom";
  }
  else {
    var country = Session.city;
  }

  var part0 = WikiEndpoint.url;
  var part1 ="?action=query&prop=extracts&exintro&titles=";
  var part2 ="Transportation_in_"+country;
  var part2b ="Transport_in_"+country;
  var part3 ="&format=json";
  var address = part0+part1+part2+part3;
  var addressb = part0+part1+part2b+part3;

  if (country != "Germany" && country != "Australia" && country != "Singapore" && country != "New_Zealand" && country != "the_United_Kingdom" && country != "Spain"){
    var theaddress = address;
  }
  else{
    var theaddress = addressb;
  }

  if (theaddress){
    $http.post(theaddress)
    .then(function (res) {
          $scope.trans = res.data.query.pages;
    });
  }else{
          $scope.trans = "";
          $scope.transportation = "Sorry, there is no content yet.";
  }

})