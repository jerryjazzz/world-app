// visaController

expats.controller('visaController', function($scope, $timeout, Session, WikiEndpoint, $http){

  //content for text

  if (Session.city == "New York"){
    var country = "the_United_States";
    $scope.linkvisa = "http://www.uscis.gov/working-united-states/working-us";
    $scope.textvisa = "Work in the United States";
  }
  else if (Session.city == "San Francisco"){
    var country = "the_United_States";
    $scope.linkvisa = "http://www.uscis.gov/working-united-states/working-us";
    $scope.textvisa = "Work in the United States";
  }
  else if (Session.city == "Los Angeles"){
    var country = "the_United_States";
    $scope.linkvisa = "http://www.uscis.gov/working-united-states/working-us";
    $scope.textvisa = "Work in the United States";
  }
  else if (Session.city == "Chicago"){
    var country = "the_United_States";
    $scope.linkvisa = "http://www.uscis.gov/working-united-states/working-us";
    $scope.textvisa = "Work in the United States";
  }
  else if (Session.city == "Miami"){
    var country = "the_United_States";
    $scope.linkvisa = "http://www.uscis.gov/working-united-states/working-us";
    $scope.textvisa = "Work in the United States";
  }
  else if (Session.city == "Houston"){
    var country = "the_United_States";
    $scope.linkvisa = "http://www.uscis.gov/working-united-states/working-us";
    $scope.textvisa = "Work in the United States";
  }
  else if (Session.city == "Madrid"){
    var country = "the_Schengen_Area";
    $scope.linkvisa = "http://www.investinspain.org/invest/en/-invest-in-spain/job-market/visas-work-and-residence-authorizations-and-permits/index.html";
    $scope.textvisa = "Work in Spain";
  }
  else if (Session.city == "Barcelona"){
    var country = "the_Schengen_Area";
    $scope.linkvisa = "http://www.investinspain.org/invest/en/-invest-in-spain/job-market/visas-work-and-residence-authorizations-and-permits/index.html";
    $scope.textvisa = "Work in Spain";
  }
  else if (Session.city == "Seville"){
    var country = "the_Schengen_Area";
    $scope.linkvisa = "http://www.investinspain.org/invest/en/-invest-in-spain/job-market/visas-work-and-residence-authorizations-and-permits/index.html";
    $scope.textvisa = "Work in Spain";
  }
  else if (Session.city == "Sydney"){
    var country = "Australia";
    $scope.linkvisa = "http://www.immi.gov.au/faqs/Pages/how-can-i-get-a-visa-to-work-in-australia.aspx";
    $scope.textvisa = "Work in Australia";
  }
  else if (Session.city == "Melbourne"){
    var country = "Australia";
    $scope.linkvisa = "http://www.immi.gov.au/faqs/Pages/how-can-i-get-a-visa-to-work-in-australia.aspx";
    $scope.textvisa = "Work in Australia";
  }
  else if (Session.city == "Brisbane"){
    var country = "Australia";
    $scope.linkvisa = "http://www.immi.gov.au/faqs/Pages/how-can-i-get-a-visa-to-work-in-australia.aspx";
    $scope.textvisa = "Work in Australia";
  }
  else if (Session.city == "Auckland"){
    var country = "New_Zealand";
    $scope.linkvisa = "http://www.immigration.govt.nz/migrant/stream/work/worktemporarily/";
    $scope.textvisa = "Work in New Zealand";
  }
  else if (Session.city == "Wellington"){
    var country = "New_Zealand";
    $scope.linkvisa = "http://www.immigration.govt.nz/migrant/stream/work/worktemporarily/";
    $scope.textvisa = "Work in New Zealand";
  }
  else if (Session.city == "Christchurch"){
    var country = "New_Zealand";
    $scope.linkvisa = "http://www.immigration.govt.nz/migrant/stream/work/worktemporarily/";
    $scope.textvisa = "Work in New Zealand";
  }
  else if (Session.city == "Toronto"){
    var country = "Canada";
    $scope.linkvisa = "http://www.cic.gc.ca/english/information/applications/work.asp";
    $scope.textvisa = "Work in Canada";
  }
  else if (Session.city == "Montreal"){
    var country = "Canada";
    $scope.linkvisa = "http://www.cic.gc.ca/english/information/applications/work.asp";
    $scope.textvisa = "Work in Canada";
  }
  else if (Session.city == "Vancouver"){
    var country = "Canada";
    $scope.linkvisa = "http://www.cic.gc.ca/english/information/applications/work.asp";
    $scope.textvisa = "Work in Canada";
  }
  else if (Session.city == "Berlin"){
    var country = "the_Schengen_Area";
    $scope.linkvisa = "http://www.bluecard-eu.de/eu-blue-card-germany/work-permit.html";
    $scope.textvisa = "Work in Germany (Blue Card)";
  }
  else if (Session.city == "Hamburg"){
    var country = "the_Schengen_Area";
    $scope.linkvisa = "http://www.bluecard-eu.de/eu-blue-card-germany/work-permit.html";
    $scope.textvisa = "Work in Germany (Blue Card)";
  }
  else if (Session.city == "Munich"){
    var country = "the_Schengen_Area";
    $scope.linkvisa = "http://www.bluecard-eu.de/eu-blue-card-germany/work-permit.html";
    $scope.textvisa = "Work in Germany (Blue Card)";
  }
  else if (Session.city == "Birmingham"){
    var country = "the_United_Kingdom";
    $scope.linkvisa = "https://www.gov.uk/browse/visas-immigration/work-visas";
    $scope.textvisa = "Work Visas in the UK";
  }
  else if (Session.city == "Leeds"){
    var country = "the_United_Kingdom";
    $scope.linkvisa = "https://www.gov.uk/browse/visas-immigration/work-visas";
    $scope.textvisa = "Work Visas in the UK";
  }
  else if (Session.city == "London"){
    var country = "the_United_Kingdom";
    $scope.linkvisa = "https://www.gov.uk/browse/visas-immigration/work-visas";
    $scope.textvisa = "Work Visas in the UK";
  }
  else {
    var country = Session.city;
    $scope.linkvisa = "http://beta.mom.gov.sg/passes-and-permits";
    $scope.textvisa = "Work passes and permits in Singapore";
  }

  var part0 = WikiEndpoint.url;
  var part1 ="?action=query&prop=extracts&exintro&titles=";
  var part2 ="Visa_policy_of_"+country;
  //var part2b ="Transport_in_"+country;
  var part3 ="&format=json";
  var address = part0+part1+part2+part3;
  //var addressb = part0+part1+part2b+part3;

  if (country == "Canada"){
    $scope.thevisas = "<p>A foreign national wishing to enter <b>Canada</b> must obtain a temporary resident visa unless he or she is a citizen of one of the 51 eligible visa exempt countries and territories. Every year, more than 35 million people visit Canada.</p>\n<p>Canada plans to introduce an electronic travel authorization for visa-free eligible nationals in March 2016.</p>\n<p></p>\n<p>The citizens of the following countries and territories are able to visit or transit through Canada with a valid passport and without obtaining a visa for a period of up to six months. Visitors are eligible if they are in good health, can convince an immigration officer that they have ties (job, home, financial assets or family) that will take them back to their home country and have enough money for their stay. In some cases a medical exam and letter of invitation may be required.</p>\n<p>On entry, Canada Border Services Officer (BSO) stamp passports or travel documents and record the date by which a traveller must leave Canada. Visitors wishing to extend their status date must apply 30 days before it expires.</p>\n";
  }
  else if (country == "New_Zealand"){
    $scope.thevisas = "<p>A foreign national wishing to enter <b>New Zealand</b> must obtain a visa unless he or she is:</p><p>-A citizen of one of the 58 visa waiver eligible countries.<br>-A citizen or permanent resident of Australia, under the Trans-Tasman Travel Arrangement.<br>-A holder of the United Nations laissez-passer. <br>Eligible for visa-free travel under other provisions (visiting force, cruise ship passengers and crew, aircraft crew etc.).<br></p>\n<p>Citizens and permanent residents of Australia are deemed to hold resident status in New Zealand upon arrival under Trans-Tasman travel arrangement.</p>\n<p>All visitors must hold a passport valid for 1 month. Visitors are required to hold proof of sufficient funds to cover their stay. The amount of funds needed is NZD 1,000 per person per month of stay or NZD 400 if accommodation has been prepaid. Visitors are required to hold documents required for their next destination.</p>\n<p>From 2015 all visa applications will be available online.</p>\n";
  } 
  else if (country == "Singapore"){
    $scope.thevisas = "<p>Visitors to <b>Singapore</b> can either enter the country without a visa or in some cases they must first obtain a visa. Almost 80% of world countries may travel to Singapore for a period ranging from 30 days to 90 days. Only 33 countries require visa for Singapore. They are categorized into countries eligible to apply for an electronic visa and countries whose citizens need a full visa.</p>\n<p>All visitors to Singapore must:</p>\n<p>-Hold a passport valid for 6 months at the time of departure.<br>-Hold an onward or return ticket.<br>-Have sufficient funds to stay in Singapore.<br>-Convince an immigration officer that they have ties (job, home, financial assets or family) that will take them back to their home country</p><p>Citizens of all countries not included in Assessment Level I and Assessment Level II lists are allowed a maximum stay of 30 days without a visa in Singapore, except the holders of the following passports who are allowed to stay for 90 days:</p><p>Singapore groups visa requiring nationals into two groups \u2014 Assessment Level I and Assessment Level II countries.</p><p>Citizens of the following countries may obtain a visa online or at the nearest Singaporean High Commission, Embassy or Consulate. Visa requirement does not apply to holders of diplomatic or official/service passports of these countries.</p>\n";
  }
  else if (country != "Canada" && country != "New_Zealand" && country != "Singapore"){
    var theaddress = address;
  }

  if (theaddress){
    $http.post(theaddress)
    .then(function (res) {
          $scope.visas = res.data.query.pages;
    });
  }

})