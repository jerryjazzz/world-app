// taxController

expats.controller('taxController', function($scope, $timeout, Session, WikiEndpoint, $http){

  //content for text

  if (Session.city == "New York"){
    var country = "the_United_States";
    $scope.corp = "15-39";
    $scope.min = "3";
    $scope.max = "55.9";
    $scope.pay = "15.3";
    $scope.vat = "0-11.7";
  }
  else if (Session.city == "San Francisco"){
    var country = "the_United_States";
    $scope.corp = "15-39";
    $scope.min = "3";
    $scope.max = "55.9";
    $scope.pay = "15.3";
    $scope.vat = "0-11.7";
  }
  else if (Session.city == "Los Angeles"){
    var country = "the_United_States";
    $scope.corp = "15-39";
    $scope.min = "3";
    $scope.max = "55.9";
    $scope.pay = "15.3";
    $scope.vat = "0-11.7";
  }
  else if (Session.city == "Chicago"){
    var country = "the_United_States";
    $scope.corp = "15-39";
    $scope.min = "3";
    $scope.max = "55.9";
    $scope.pay = "15.3";
    $scope.vat = "0-11.7";
  }
  else if (Session.city == "Miami"){
    var country = "the_United_States";
    $scope.corp = "15-39";
    $scope.min = "3";
    $scope.max = "55.9";
    $scope.pay = "15.3";
    $scope.vat = "0-11.7";
  }
  else if (Session.city == "Houston"){
    var country = "the_United_States";
    $scope.corp = "15-39";
    $scope.min = "3";
    $scope.max = "55.9";
    $scope.pay = "15.3";
    $scope.vat = "0-11.7";
  }
  else if (Session.city == "Madrid"){
    var country = "Spain";
    $scope.corp = "25";
    $scope.min = "";
    $scope.max = "49";
    $scope.pay = "36.25";
    $scope.vat = "21";
  }
  else if (Session.city == "Barcelona"){
    var country = "Spain";
    $scope.corp = "25";
    $scope.min = "";
    $scope.max = "49";
    $scope.pay = "36.25";
    $scope.vat = "21";
  }
  else if (Session.city == "Seville"){
    var country = "Spain";
    $scope.corp = "25";
    $scope.min = "";
    $scope.max = "49";
    $scope.pay = "36.25";
    $scope.vat = "21";
  }
  else if (Session.city == "Sydney"){
    var country = "Australia";
    $scope.corp = "28.5 ";
    $scope.min = "";
    $scope.max = "49";
    $scope.pay = "4.75-6";
    $scope.vat = "10";
  }
  else if (Session.city == "Melbourne"){
    var country = "Australia";
    $scope.corp = "28.5 ";
    $scope.min = "";
    $scope.max = "49";
    $scope.pay = "4.75-6";
    $scope.vat = "10";
  }
  else if (Session.city == "Brisbane"){
    var country = "Australia";
    $scope.corp = "28.5 ";
    $scope.min = "";
    $scope.max = "49";
    $scope.pay = "4.75-6";
    $scope.vat = "10";
  }
  else if (Session.city == "Auckland"){
    var country = "New_Zealand";
    $scope.corp = "28";
    $scope.min = "10.5";
    $scope.max = "33";
    $scope.pay = "";
    $scope.vat = "15";
  }
  else if (Session.city == "Wellington"){
    var country = "New_Zealand";
    $scope.corp = "28";
    $scope.min = "10.5";
    $scope.max = "33";
    $scope.pay = "";
    $scope.vat = "15";
  }
  else if (Session.city == "Christchurch"){
    var country = "New_Zealand";
    $scope.corp = "28";
    $scope.min = "10.5";
    $scope.max = "33";
    $scope.pay = "";
    $scope.vat = "15";
  }
  else if (Session.city == "Toronto"){
    var country = "Canada";
    $scope.corp = "11-15";
    $scope.min = "";
    $scope.max = "50";
    $scope.pay = "9.9+1.8";
    $scope.vat = "5";
  }
  else if (Session.city == "Montreal"){
    var country = "Canada";
    $scope.corp = "11-15";
    $scope.min = "";
    $scope.max = "50";
    $scope.pay = "9.9+1.8";
    $scope.vat = "5";
  }
  else if (Session.city == "Vancouver"){
    var country = "Canada";
    $scope.corp = "11-15";
    $scope.min = "";
    $scope.max = "50";
    $scope.pay = "9.9+1.8";
    $scope.vat = "5";
  }
  else if (Session.city == "Berlin"){
    var country = "Germany";
    $scope.corp = "29.8";
    $scope.min = "";
    $scope.max = "45";
    $scope.pay = "41";
    $scope.vat = "19";
  }
  else if (Session.city == "Hamburg"){
    var country = "Germany";
    $scope.corp = "29.8";
    $scope.min = "";
    $scope.max = "45";
    $scope.pay = "41";
    $scope.vat = "19";
  }
  else if (Session.city == "Munich"){
    var country = "Germany";
    $scope.corp = "29.8";
    $scope.min = "";
    $scope.max = "45";
    $scope.pay = "41";
    $scope.vat = "19";
  }
  else if (Session.city == "Birmingham"){
    var country = "the_United_Kingdom";
    $scope.corp = "20";
    $scope.min = "";
    $scope.max = "45";
    $scope.pay = "0-25.8";
    $scope.vat = "20";
  }
  else if (Session.city == "Leeds"){
    var country = "the_United_Kingdom";
    $scope.corp = "20";
    $scope.min = "";
    $scope.max = "45";
    $scope.pay = "0-25.8";
    $scope.vat = "20";
  }
  else if (Session.city == "London"){
    var country = "the_United_Kingdom";
    $scope.corp = "20";
    $scope.min = "";
    $scope.max = "45";
    $scope.pay = "0-25.8";
    $scope.vat = "20";
  }
  else {
    var country = Session.city;
    $scope.corp = "17";
    $scope.min = "";
    $scope.max = "20";
    $scope.pay = "11.5-36";
    $scope.vat = "7";
  }

  var part0 = WikiEndpoint.url;
  var part1 ="?action=query&prop=extracts&exintro&titles=";
  var part2 ="Taxation_in_"+country;
  //var part2b ="Transport_in_"+country;
  var part3 ="&format=json";
  var address = part0+part1+part2+part3;
  //var addressb = part0+part1+part2b+part3;

  if (country == "Singapore"){
    $scope.taxes = "<p>Singapore is a highly developed trade-oriented market economy. Singapore's economy has been ranked as the most open in the world, 7th least corrupt, most pro-business, with low tax rates (14.2% of Gross Domestic Product, GDP) and has the third highest per-capita GDP in the world; in terms of Purchasing Power Parity (PPP). Government-linked companies play a substantial role in Singapore's economy, which are owned through the sovereign wealth fund Temasek Holdings, which holds majority stakes in several of the nation's largest companies, such as Singapore Airlines, SingTel, ST Engineering and MediaCorp. The <b>economy of Singapore</b> is a major Foreign Direct Investment (FDI) outflow financier in the world. Singapore has also benefited from the inward flow of FDI from global investors and institutions due to her highly attractive investment climate and a stable political environment.</p>\n<p>Exports, particularly in electronics, chemicals and services including the posture that Singapore is the regional hub for wealth management provide the main source of revenue for the economy, which allows it to purchase natural resources and raw goods which it lacks. Moreover, water is scarce in Singapore therefore water is defined as a precious resource in Singapore along with the scarcity of land to be treated with land fill of Pulau Semakau. Singapore has limited arable land, meaning that Singapore has to rely on the agrotechnology park for agricultural production and consumption. Human resources is another vital issue for the health of the Singaporean economy. The economy of Singapore ranks 2nd overall in the Scientific American Biotechnology ranking in 2014, with the featuring of Biopolis.</p>\n<p>Singapore could thus be said to rely on an extended concept of intermediary trade to Entrep\u00f4t trade, by purchasing raw goods and refining them for re-export, such as in the wafer fabrication industry and oil refining. Singapore also has a strategic port which makes it more competitive than many of its neighbours in carrying out such entrepot activities. Singapore has the highest trade to GDP ratio in the world, averaging around 400% during 2008\u201311. The Port of Singapore is the second-busiest in the world by cargo tonnage. In addition, Singapore's port infrastructure and skilled workforce, which is due to the success of the country's education policy in producing skilled workers, is also fundamental in this aspect as they provide easier access to markets for both importing and exporting, and also provide the skill(s) needed to refine imports into exports.</p>\n";
  }
  else if (country != "Singapore"){
    var theaddress = address;
  }

  if (theaddress){
    $http.post(theaddress)
    .then(function (res) {
          $scope.taxs = res.data.query.pages;
    });
  }

})