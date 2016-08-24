// EducationController

expats.controller('educationController', function($scope, $timeout, Session, WikiEndpoint, $http){

  /*this is the content for the chart
  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
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

  //ends chart*/


if (Session.city == "Miami"){

$scope.theschools ="<p class=\"rankedtext title\">Top Ranked FL Schools:</p>\
\
<p class=\"rankedtext\"><strong>Pine View School</strong><br>\
1 Python Path, Osprey, FL 34229</p>\
\
<p class=\"rankedtext\"><strong>Stanton College Preparatory School</strong><br>\
1149 West 13Th St, Jacksonville, FL 32209</p>\
\
<p class=\"rankedtext\"><strong>Design & Architecture Senior High</strong><br>\
4001 Ne 2Nd Ave, Miami, FL 33137</p>\
\
<p class=\"rankedtext\"><strong>International Studies Charter High School</strong><br>\
2480 Sw Eighth St, Miami, FL 33135</p>\
\
<p class=\"rankedtext\"><strong>Alexander W. Dreyfoos School of the Arts</strong><br>\
501 South Sapodilla Ave, West Palm Beach, FL 33401</p>\
\
<p class=\"rankedtext\"><strong>Edgewood Junior-Senior High School</strong><br>\
180 East Merritt Ave, Merritt Island, FL 32953</p>\
\
<p class=\"rankedtext\"><strong>Young Women's Preparatory Academy</strong><br>\
1150 Sw 1 St, Miami, FL 33130</p>\
\
<p class=\"rankedtext\"><strong>Suncoast Community High School</strong><br>\
1717 Ave South, Riviera Beach, FL 33404</p>\
\
<p class=\"rankedtext\"><strong>West Shore Junior/Senior High School</strong><br>\
250 Wildcat Alley, Melbourne, FL 32935</p>\
\
<p class=\"rankedtext\"><strong>MAST Academy</strong><br>\
3979 Rickenbacker Causeway, Key Biscayne, FL 33149</p>\
\
<p class=\"rankedtext title\">Top Universities in Florida:</p>\
\
<p class=\"rankedtext\"><strong>University of Florida</strong> (179th in the world; 48th in the US)</p>\
\
<p class=\"rankedtext\"><strong>University of Miami</strong> (232nd in the world; 55th in the US)</p>\
\
<p class=\"rankedtext\"><strong>Florida State University</strong> (421-430 in the world; 87th in the US)</p>\
\
<p class=\"rankedtext\"><strong>University of South Florida</strong> (501-550 in the world; 103rd in the US)</p>";

}

else if (Session.city == "Houston"){

$scope.theschools  ="<p class=\"rankedtext title\">Top Ranked FL Schools:</p>\
\
<p class=\"rankedtext\">Top Ranked TX Schools</p>\
\
<p class=\"rankedtext\"><strong>School for the Talented and Gifted</strong><br>\
1201 East Eighth St, Dallas, TX 75203</p>\
\
<p class=\"rankedtext\"><strong>School of Science and Engineering Magnet</strong><br>\
1201 East Eighth St, Dallas, TX 75203</p>\
\
<p class=\"rankedtext\"><strong>Carnegie Vanguard High School</strong><br>\
10401 Scott St, Houston, TX 77051</p>\
\
<p class=\"rankedtext\"><strong>YES Prep North Central</strong><br>\
13703 Aldine Westfield Rd, Houston, TX 77039</p>\
\
<p class=\"rankedtext\"><strong>IDEA Academy and College Preparatory School</strong><br>\
401 South 1St St, Donna, TX 78537</p>\
\
<p class=\"rankedtext\"><strong>Michael E. DeBakey High School for Health Professions</strong><br>\
3100 Shenandoah St, Houston, TX 77021</p>\
\
<p class=\"rankedtext\"><strong>Liberal Arts and Science Academy</strong><br>\
7309 Lazy Creek Dr, Austin, TX 78724</p>\
\
<p class=\"rankedtext\"><strong>The Science Academy of South Texas</strong><br>\
900 Med High Dr, Mercedes, TX 78570</p>\
\
<p class=\"rankedtext\"><strong>KIPP Austin Col</strong><br>\
8509 Fm 969 Bldg 513, Austin, TX 78724</p>\
\
<p class=\"rankedtext\"><strong>Irma Lerma Rangel Young Women's Leadership School</strong><br>\
1718 R B Cullum Blvd, Dallas, TX 75210</p>\
\
<p class=\"rankedtext title\">Top Universities in Texas:</p>\
\
<p class=\"rankedtext\"><strong>University of Texas at Austin</strong> (71th in the world; 25th in the US)</p>\
\
<p class=\"rankedtext\"><strong>Rice University</strong> (136th in the world; 40th in the US)</p>\
\
<p class=\"rankedtext\"><strong>Texas A&M University</strong> (153rd in the world; 44th in the US)</p>\
\
<p class=\"rankedtext\"><strong>University of Texas at Dallas</strong> (366th in the world; 77th in the US)</p>\
\
<p class=\"rankedtext\"><strong>University of Houston</strong> (551-600 in the world; 111th in the US)</p>\
\
<p class=\"rankedtext\"><strong>Southern Methodist University</strong> (651-700 in the world; 127th in the US)</p>\
\
<p class=\"rankedtext\"><strong>Baylor University</strong> (701+ in the world; 130th in the US)</p>";

}

else if (Session.city == "New York"){

$scope.theschools ="<p class=\"rankedtext title\">Top Ranked NY Schools:</p>\
\
<p class=\"rankedtext\"><strong>The High School of American Studies at Lehman College</strong><br>\
2925 Goulden Ave, Bronx, NY 10468</p>\
\
<p class=\"rankedtext\"><strong>The Bronx High School of Science</strong><br>\
75 West 205Th St, Bronx, NY 10468</p>\
\
<p class=\"rankedtext\"><strong>Brooklyn Latin School</strong><br>\
325 Bushwick Ave, Brooklyn, NY 11206</p>\
\
<p class=\"rankedtext\"><strong>High School for Dual Language and Asian Studies</strong><br>\
350 Grand St, New York, NY 10002</p>\
\
<p class=\"rankedtext\"><strong>Townsend Harris High School</strong><br>\
149 11 Melbourne Ave, Flushing, NY 11367</p>\
\
<p class=\"rankedtext\"><strong>Staten Island Technical High School</strong><br>\
485 Clawson St, Staten Island, NY 10306</p>\
\
<p class=\"rankedtext\"><strong>Manhattan Bridges High School</strong><br>\
525 West 50Th St, New York, NY 10019</p>\
\
<p class=\"rankedtext\"><strong>Queens High School for the Sciences at York College</strong><br>\
94 50 159Th St, Jamaica, NY 11451</p>\
\
<p class=\"rankedtext\"><strong>Edgemont Junior Senior High School</strong><br>\
200 White Oak Ln, Scarsdale, NY 10583</p>\
\
<p class=\"rankedtext\"><strong>Brooklyn Technical High School</strong><br>\
29 Ft Greene Place, Brooklyn, NY 11217</p>\
\
<p class=\"rankedtext title\">Top Universities in New York:</p>\
\
<p class=\"rankedtext\"><strong>Columbia University</strong> (14th in the world; 9th in the US)</p>\
\
<p class=\"rankedtext\"><strong>Cornell University</strong> (15th in the world; 10th in the US)</p>\
\
<p class=\"rankedtext\"><strong>New York University</strong> (44th in the world; 18th in the US)</p>\
\
<p class=\"rankedtext\"><strong>University of Rochester</strong> (151th in the world; 43rd in the US)</p>\
\
<p class=\"rankedtext\"><strong>Yeshiva University</strong> (269th in the world; 61st in the US)</p>";

}

else if (Session.city == "Chicago"){

$scope.theschools ="<p class=\"rankedtext title\">Top Ranked IL Schools:</p>\
\
<p class=\"rankedtext\"><strong>Northside College Preparatory High School</strong><br>\
5501 North Kedzie Ave, Chicago, IL 60625</p>\
\
<p class=\"rankedtext\"><strong>Walter Payton College Preparatory High School</strong><br>\
1034 North Wells St, Chicago, IL 60610</p>\
\
<p class=\"rankedtext\"><strong>Jones College Prep</strong><br>\
606 South State St, Chicago, IL 60605</p>\
\
<p class=\"rankedtext\"><strong>Whitney M. Young Magnet High School</strong><br>\
211 South Laflin St, Chicago, IL 60607</p>\
\
<p class=\"rankedtext\"><strong>Adlai E. Stevenson High School</strong><br>\
1 Stevenson Dr, Lincolnshire, IL 60069</p>\
\
<p class=\"rankedtext\"><strong>Deerfield High School</strong><br>\
1959 Waukegan Rd, Deerfield, IL 60015</p>\
\
<p class=\"rankedtext\"><strong>Hinsdale Central High School</strong><br>\
5500 South Grant St, Hinsdale, IL 60521</p>\
\
<p class=\"rankedtext\"><strong>Lane Technical High School</strong><br>\
2501 West Addison St, Chicago, IL 60618</p>\
\
<p class=\"rankedtext\"><strong>John Hersey High School</strong><br>\
1900 East Thomas St, Arlington Heights, IL 60004</p>\
\
<p class=\"rankedtext\"><strong>Highland Park High School</strong><br>\
433 Vine Ave, Highland Park, IL 60035</p>\
\
<p class=\"rankedtext title\">Top Universities in Illinois:</p>\
\
<p class=\"rankedtext\"><strong>University of Chicago</strong> (9th in the world; 5th in the US)</p>\
\
<p class=\"rankedtext\"><strong>Northwestern University</strong> (29th in the world; 15th in the US)</p>\
\
<p class=\"rankedtext\"><strong>University of Illinois at Urbana-Champaign</strong> (56th in the world; 21st in the US)</p>\
\
<p class=\"rankedtext\"><strong>University of Illinois, Chicago</strong> (192nd in the world; 51st in the US)</p>\
\
<p class=\"rankedtext\"><strong>Illinois Institute of Technology</strong> (441-450 in the world; 90th in the US)</p>\
\
<p class=\"rankedtext\"><strong>Loyola University Chicago</strong> (601-650 in the world; 118th in the US)</p>";

}

else if (Session.city == "San Francisco" || Session.city == "Los Angeles" ){

$scope.theschools ="<p class=\"rankedtext title\">Top Ranked CA Schools:</p>\
\
<p class=\"rankedtext\"><strong>Oxford Academy</strong><br>\
5172 Orange Ave, Cypress, CA 90630</p>\
\
<p class=\"rankedtext\"><strong>Whitney High School</strong><br>\
16800 Shoemaker Ave, Cerritos, CA 90703</p>\
\
<p class=\"rankedtext\"><strong>Pacific Collegiate School</strong><br>\
255 Swift St, Santa Cruz, CA 95060</p>\
\
<p class=\"rankedtext\"><strong>KIPP San Jose Collegiate</strong><br>\
1790 Educational Park Dr, San Jose, CA 95133</p>\
\
<p class=\"rankedtext\"><strong>The Preuss School</strong><br>\
9500 Gilman Dr Mc 0536, La Jolla, CA 92093</p>\
\
<p class=\"rankedtext\"><strong>American Indian Public High School</strong><br>\
3637 Magee Ave, Oakland, CA 94619</p>\
\
<p class=\"rankedtext\"><strong>Lowell High School</strong><br>\
1101 Eucalyptus Dr, San Francisco, CA 94132</p>\
\
<p class=\"rankedtext\"><strong>University High School</strong><br>\
2611 East Matoian M/S Uh134, Fresno, CA 93740</p>\
\
<p class=\"rankedtext\"><strong>Hawthorne Math and Science Academy</strong><br>\
4467 West Broadway, Hawthorne, CA 90250</p>\
\
<p class=\"rankedtext\"><strong>Lennox Mathematics, Science & Technology Academy</strong><br>\
11036 Hawthorne Blvd, Lennox, CA 90304</p>\
\
<p class=\"rankedtext title\">Top Universities in California:</p>\
\
<p class=\"rankedtext\"><strong>Stanford University</strong> (ranked 7th in the world; 3rd in the US)</p>\
\
<p class=\"rankedtext\"><strong>California Institute of Technology</strong> (10th in the world; 6th in the US)</p>\
\
<p class=\"rankedtext\"><strong>University of California, Berkeley</strong> (UCB, 25th in the world; 14th in the US)</p>";

}

else if (Session.city == "Madrid"){

$scope.theschools ="<p class=\"rankedtext title\">Top Ranked Madrid Schools:</p>\
\
<p class=\"rankedtext\"><strong>Montserrat</strong> (ranked 1st in Spain)</p>\
\
<p class=\"rankedtext\"><strong>&Aacute;gora</strong> (ranked 11th in Spain)</p>\
\
<p class=\"rankedtext\"><strong>La Miranda</strong> (ranked 28th in Spain)</p>\
\
<p class=\"rankedtext\"><strong>Virolai</strong> (ranked 35th in Spain)</p>\
\
<p class=\"rankedtext\"><strong>La Vall</strong> (ranked 47th in Spain)</p>\
\
<p class=\"rankedtext title\">Top Universities in Madrid:</p>\
\
<p class=\"rankedtext\"><strong>Universidad Aut&oacute;noma de Madrid</strong> (ranked at 178th in the World)</p>\
\
<p class=\"rankedtext\"><strong>University Complutense Madrid</strong> (ranked at 212th place in the world)</p>";

}

else if (Session.city == "Barcelona"){

$scope.theschools ="<p class=\"rankedtext title\">Top Ranked Barcelona Schools:</p>\
\
<p class=\"rankedtext\"><strong>San Patricio</strong> (ranked 3th in Spain)</p>\
\
<p class=\"rankedtext\"><strong>Estudio</strong> (ranked 6th in Spain)</p>\
\
<p class=\"rankedtext\"><strong>Liceo Europeo</strong> (ranked 7th in Spain)</p>\
\
<p class=\"rankedtext\"><strong>Base</strong> (ranked 8th in Spain)</p>\
\
<p class=\"rankedtext\"><strong>Centros SEK</strong> (ranked 10th in Spain)</p>\
\
<p class=\"rankedtext title\">Top Universities in Barcelona:</p>\
\
<p class=\"rankedtext\"><strong>University of Barcelona</strong> (ranked at 166th place in the World)</p>\
\
<p class=\"rankedtext\"><strong>Universitat Aut&oacute;noma de Barcelona</strong> (ranked 173rd place in the world)</p>";

}

else if (Session.city == "Seville"){

$scope.theschools ="<p class=\"rankedtext title\">Top Ranked Seville Schools:</p>\
\
<p class=\"rankedtext\"><strong>Alberto Durero</strong> (ranked 27th in Spain)</p>\
\
<p class=\"rankedtext\"><strong>San Francisco de Paula</strong> (ranked 46th in Spain)</p>\
\
<p class=\"rankedtext\"><strong>Highlands Sevilla</strong> (ranked 81th in Spain)</p>\
\
<p class=\"rankedtext\"><strong>Buen Pastor</strong> (ranked 83th in Spain)</p>\
\
<p class=\"rankedtext\"><strong>Europa International School</strong> (ranked 86th in Spain)</p>\
\
<p class=\"rankedtext title\">Top University in Seville:</p>\
\
<p class=\"rankedtext\"><strong>Universidad de Sevilla</strong></p>";

}

else if (Session.city == "Sydney"){

$scope.theschools ="<p class=\"rankedtext title\">Top Ranked Sydney Schools:</p>\
\
<p class=\"rankedtext\"><strong>James Ruse Agricultural High School</strong><br>\
Carlingford, NSW,2 118</p>\
\
<p class=\"rankedtext\"><strong>North Sydney Girls High School</strong><br>\
Crows Nest, NSW, 2065</p>\
\
<p class=\"rankedtext\"><strong>Sydney Girls High School</strong><br>\
Surry Hills, NSW, 2010</p>\
\
<p class=\"rankedtext\"><strong>North Sydney Boys High School</strong><br>\
Crows Nest, NSW, 2065</p>\
\
<p class=\"rankedtext\"><strong>Baulkham Hills High School</strong><br>\
Baulkham Hills, NSW, 2153</p>\
\
<p class=\"rankedtext\"><strong>Sydney Boys High School</strong><br>\
Surry Hills, NSW, 2010</p>\
\
<p class=\"rankedtext title\">Top Universities in New South Wales:</p>\
\
<p class=\"rankedtext\"><strong>University of Sydney</strong> (ranked at 37h place in the world)</p>\
\
<p class=\"rankedtext\"><strong>University of New South Wales</strong> (ranked at 48th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Macquarie University</strong> (ranked at 254h place in the world)</p>\
\
<p class=\"rankedtext\"><strong>University of Newcastle</strong> (ranked at 257th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>University of Technology</strong> (ranked at 264th place in the world)</p>";

}

else if (Session.city == "Melbourne"){

$scope.theschools ="<p class=\"rankedtext title\">Top Ranked Melbourne Schools:</p>\
\
<p class=\"rankedtext\"><strong>Melbourne High School</strong><br>\
Post Code 3141</p>\
\
<p class=\"rankedtext\"><strong>Mac Robertson Girls High School</strong><br>\
Post Code 3004</p>\
\
<p class=\"rankedtext\"><strong>Nossal High School</strong><br>\
Berwick, VIC, 3806</p>\
\
<p class=\"rankedtext\"><strong>Suzanne Cory High School</strong><br>\
Werribee, VIC, 3030</p>\
\
<p class=\"rankedtext\"><strong>Presbyterian Ladies' College</strong><br>\
Burwood, VIC, 3125</p>\
\
<p class=\"rankedtext title\">Top Universities in Victoria:</p>\
\
<p class=\"rankedtext\"><strong>University of Melbourne</strong> (ranked at 33rd place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Monash University</strong> (ranked at 70th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Royal Melbourne Institute of Technology</strong> (ranked at 304th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Deakin University</strong> (ranked at 360th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>La Trobe University</strong> (ranked at 401-410 place in the world)</p>";

}

else if (Session.city == "Brisbane"){

$scope.theschools ="<p class=\"rankedtext title\">Top Ranked Brisbane Schools:</p>\
\
<p class=\"rankedtext\"><strong>Brisbane Girls Grammar School</strong></p>\
\
<p class=\"rankedtext\"><strong>Brisbane Grammar School</strong></p>\
\
<p class=\"rankedtext\"><strong>Brisbane State High School</strong></p>\
\
<p class=\"rankedtext\"><strong>Ormiston College</strong></p>\
\
<p class=\"rankedtext\"><strong>Groves Christian College</strong></p>\
\
<p class=\"rankedtext title\">Top Universities in Queensland:</p>\
\
<p class=\"rankedtext\"><strong>University of Queensland</strong> (ranked at 43th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Queensland University of Technology</strong> (ranked at 285th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Griffith University</strong> (ranked at 324th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>James Cook University</strong> (ranked at 350th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Bond University</strong> (ranked at 471-480th place in the world)</p>";

}

else if (Session.city == "Auckland"){

$scope.theschools ="<p class=\"rankedtext title\">Top Ranked Auckland Schools:</p>\
\
<p class=\"rankedtext\"><strong>Acg Parnell College</strong></p>\
\
<p class=\"rankedtext\"><strong>Acg Senior College</strong></p>\
\
<p class=\"rankedtext\"><strong>Acg Strathallan</strong></p>\
\
<p class=\"rankedtext\"><strong>Auckland International College</strong></p>\
\
<p class=\"rankedtext\"><strong>Diocesan School For Girls</strong></p>\
\
<p class=\"rankedtext title\">Top University in Auckland:</p>\
\
<p class=\"rankedtext\"><strong>University of Auckland</strong> (ranked  92nd place in the world)</p>";

}

else if (Session.city == "Wellington"){

$scope.theschools ="<p class=\"rankedtext title\">Top Ranked Wellington Schools:</p>\
\
<p class=\"rankedtext\"><strong>Amesbury School</strong></p>\
\
<p class=\"rankedtext\"><strong>Bellevue School</strong></p>\
\
<p class=\"rankedtext\"><strong>Berhampore School</strong></p>\
\
<p class=\"rankedtext\"><strong>Brooklyn School</strong></p>\
\
<p class=\"rankedtext\"><strong>Cardinal McKeefry School</strong></p>\
\
<p class=\"rankedtext title\">Top University in Willington:</p>\
\
<p class=\"rankedtext\"><strong>Victoria University of Wellington</strong> (ranked  275th place in the world)</p>";

}

else if (Session.city == "Christchurch"){

$scope.theschools ="<p class=\"rankedtext title\">Top Ranked Christchurch Schools:</p>\
\
<p class=\"rankedtext\"><strong>Addington School</strong></p>\
\
<p class=\"rankedtext\"><strong>Aidanfield Christian School</strong></p>\
\
<p class=\"rankedtext\"><strong>Allenvale Special School & Res. Centre</strong></p>\
\
<p class=\"rankedtext\"><strong>Aranui High School</strong></p>\
\
<p class=\"rankedtext\"><strong>Aranui School</strong></p>\
\
<p class=\"rankedtext\">Top University in Christchurch:</p>\
\
<p class=\"rankedtext\"><strong>University of Canterbury</strong> (ranked 242th place in the world)</p>";

}

else if (Session.city == "Toronto"){

$scope.theschools ="<p class=\"rankedtext title\">Top Ranked Toronto Schools:</p>\
\
<p class=\"rankedtext\"><strong>St Michael Choir</strong><br>\
67 Bond Street, Toronto - Central, ON, M5B 1X2<br>\
Phone Number: 416 393-5518</p>\
\
<p class=\"rankedtext\"><strong>Neil McNeil</strong><br>\
127 Victoria Park Avenue, Toronto - Central, ON, M4E 3S2<br>\
Phone Number: 416 393-5502</p>\
\
<p class=\"rankedtext\"><strong>Ursula Franklin Academy</strong><br>\
146 Glendonwynne Rd, Toronto - Central, ON, M6P 3E3<br>\
Phone Number: 416 393-0430</p>\
\
<p class=\"rankedtext\"><strong>William Lyon Mackenzie Collegiate Institute</strong><br>\
20 Tillplain Rd, Toronto - North York, ON, M3H 5R2<br>\
Phone Number: 416 395-3330</p>\
\
<p class=\"rankedtext\"><strong>Dr Norman Bethune Collegiate Institute</strong><br>\
200 Fundy Bay Blvd, Toronto - Scarborough, ON, M1W 3G1<br>\
Phone Number: 416 396-8200</p>\
\
<p class=\"rankedtext title\">Top Universities in Toronto:</p>\
\
<p class=\"rankedtext\"><strong>University of Toronto</strong> (ranked 20th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>McMaster University</strong> (ranked 113th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>York University</strong> (ranked 421-430th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Ryerson University</strong> (ranked 701+th place in the world)</p>";

}

else if (Session.city == "Vancouver"){

$scope.theschools ="<p class=\"rankedtext title\">Top Ranked Vancouver Schools:</p>\
\
<p class=\"rankedtext\"><strong>York House School</strong><br>\
Independent 4176, Alexandra St, Vancouver, BC, V6J 2V6<br>\
Phone Number: 604 736-6551</p>\
\
<p class=\"rankedtext\"><strong>Crofton House</strong><br>\
Independent, 3200 41st Ave W, Vancouver, BC, V6N 3E1<br>\
Phone Number: 604 263-3255</p>\
\
<p class=\"rankedtext\"><strong>Little Flower Academy</strong><br>\
Independent, 4195 Alexandra St, Vancouver, BC, V6J 4C6<br>\
Phone Number: 604 738-9016</p>\
\
<p class=\"rankedtext\"><strong>West Point Grey Academy</strong><br>\
Independent, 4125 8th Ave W, Vancouver, BC, V6R 4P9<br>\
Phone Number: 604 222-8750</p>\
\
<p class=\"rankedtext\"><strong>St George's School</strong><br>\
Independent, 4175 W 29th Ave, Vancouver, BC, V6S 1V1<br>\
Phone Number: 604 224-1304</p>\
\
<p class=\"rankedtext title\">Top Universities in Vancouver:</p>\
\
<p class=\"rankedtext\"><strong>University of British Columbia</strong> (ranked 43th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Simon Fraser University</strong> (ranked 222th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>University of Victoria</strong> (ranked 290th place in the world)</p>";

}

else if (Session.city == "Montreal"){

$scope.theschools ="<p class=\"rankedtext title\">Top Ranked Montreal Schools:</p>\
\
<p class=\"rankedtext\"><strong>Coll&egrave;ge Jean-de-Br&eacute;beuf</strong><br>\
Priv&eacute;, 3200, ch. Côte Ste-Catherine, Montr&eacute;al, QC, strongT 1C1<br>\
Phone Number: 514 342-9342</p>\
\
<p class=\"rankedtext\"><strong>Coll&egrave;ge Jean-Eudes</strong><br>\
Priv&eacute;, 3535, boul. Rosemont, Montr&eacute;al, QC, H1X 1K7<br>\
Phone Number: 514 376-5740</p>\
\
<p class=\"rankedtext\"><strong>Coll&egrave;ge Sainte-Anne de Lachine</strong><br>\
Priv&eacute;, 1250, boul. Saint-Joseph, Montr&eacute;al, QC, H8S 2M8<br>\
Phone Number: 514 637-3571</p>\
\
<p class=\"rankedtext\"><strong>&Eacute;cole Ma&iuml;monide, Campus Jacob Safra</strong><br>\
Priv&eacute;, 1900, rue Bourdon, Montr&eacute;al, QC, H4M 2X7<br>\
Phone Number: 514 744-5300</p>\
\
<p class=\"rankedtext\"><strong>Coll&egrave;ge Beaubois</strong><br>\
Priv&eacute;, 4901, rue du Coll&egrave;ge-Beaubois, Montr&eacute;al, QC, H8Y 3T4<br>\
Phone Number: 514 684-7642</p>\
\
<p class=\"rankedtext title\">Top Universities in Montreal:</p>\
\
<p class=\"rankedtext\"><strong>McGill University</strong> (ranked 21st place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Universit&eacute; de Montr&eacute;al</strong> (ranked 83rd place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Laval University</strong> (ranked 298th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Universit&eacute; de Sherbrooke</strong> (ranked 441-450th place in the world)</p>\
 \
<p class=\"rankedtext\"><strong>Concordia University</strong> (ranked 461-470th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Universit&eacute; de Qu&eacute;bec</strong> (ranked 501-550th place in the world)</p>";

}

else if (Session.city == "Berlin"){

$scope.theschools ="<p class=\"rankedtext title\">Main Schools in Berlin:</p>\
\
<p class=\"rankedtext\"><strong>John F. Kennedy School</strong><br>\
Teltower Damm 87-93, 14167 Berlin<br>\
Phone Number: +49 30 902995711</p>\
\
<p class=\"rankedtext\"><strong>Berlin Cosmopolitan School</strong><br>\
R&uuml;ckerstraße 9, 10119 Berlin<br>\
Phone Number: +49 30 68833230</p>\
\
<p class=\"rankedtext\"><strong>Berlin British School</strong><br>\
Dickensweg 17-19, 14055 Berlin<br>\
Phone Number: +49 30 35109190</p>\
\
<p class=\"rankedtext\"><strong>Berlin Metropolitan School</strong><br>\
Linienstraße 122, 10115 Berlin<br>\
Phone Number: +49 30 88727390</p>\
\
<p class=\"rankedtext\"><strong>Canisius-Kolleg</strong><br>\
Tiergartenstraße 30-31, 10785 Berlin<br>\
Phone Number: +49 30 26481100</p>\
\
<p class=\"rankedtext title\">Top Universities in Berlin:</p>\
\
<p class=\"rankedtext\"><strong>Humboldt-Universit&auml;t zu Berlin</strong> (ranked 134th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Freie Universit&auml;t Berlin</strong> (ranked 150th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Technische Universit&auml;t Berlin</strong> (ranked 192th place in the world)</p>";

}

else if (Session.city == "Hamburg"){

$scope.theschools ="<p class=\"rankedtext title\">Main Schools in Hamburg:</p>\
\
<p class=\"rankedtext\"><strong>Christianeum Hamburg</strong><br>\
Otto-Ernst-Straße 34, 22605 Hamburg<br>\
Phone Number: +49 40 42888280</p>\
\
<p class=\"rankedtext\"><strong>International School of Hamburg</strong><br>\
Hemmingstedter Weg 130, 22609 Hamburg<br>\
Phone Number: +49 40 8000500</p>\
\
<p class=\"rankedtext\"><strong>Wilhelm-Gymnasium</strong><br>\
Klosterstieg 17, 20149 Hamburg<br>\
Phone Number: +49 40 4152020</p>\
\
<p class=\"rankedtext\"><strong>Klosterschule</strong><br>\
Westphalensweg 7, 20099 Hamburg<br>\
Phone Number: +49 40 4288210</p>\
\
<p class=\"rankedtext\"><strong>Gymnasium Farmsen</strong><br>\
Swebenh&ouml;he 50, 22159 Hamburg<br>\
Phone Number: +49 40 6450373</p>\
\
<p class=\"rankedtext title\">Top University in Hamburg:</p>\
\
<p class=\"rankedtext\"><strong>Universit&auml;t Hamburg</strong> (ranked 192th place in the world)</p>";

}

else if (Session.city == "Munich"){

$scope.theschools ="<p class=\"rankedtext title\">Main Schools in Munich:</p>\
\
<p class=\"rankedtext\"><strong>European School</strong><br>\
Elise-Aulinger-Straße 21, 81739 M&uuml;nchen<br>\
Phone Number: +49 89 628160</p>\
\
<p class=\"rankedtext\"><strong>Gisela-Gymnasium</strong><br>\
M&uuml;nchen-Schwabing, Arcisstraße 65, 80801 M&uuml;nchen<br>\
Phone Number: +49 89 2781420</p>\
\
<p class=\"rankedtext\"><strong>Klenze-Gymnasium</strong><br>\
Wackersberger Straße 59, 81371 M&uuml;nchen<br>\
Phone Number: +49 89 23343360</p>\
\
<p class=\"rankedtext\"><strong>Luitpold-Gymnasium</strong><br>\
Seeaustraße 1, 80538 M&uuml;nchen<br>\
Phone Number: +49 89 2103850</p>\
\
<p class=\"rankedtext\"><strong>Maria-Theresia-Gymnasium</strong><br>\
Regerplatz 1, 81541 M&uuml;nchen<br>\
Phone Number: +49 89 4599200</p>\
\
<p class=\"rankedtext title\">Top Universities in Bavaria:</p>\
\
<p class=\"rankedtext\"><strong>Ludwig-Maximilians-Universit&auml;t M&uuml;nchen</strong> (ranked 52th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Technische Universit&auml;t M&uuml;nchen</strong> (ranked 54th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Universit&auml;t Erlangen-N&uuml;rnberg</strong> (ranked 285th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Julius-Maximilians-Universit&auml;t W&uuml;rzburg</strong> (ranked 341th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Universit&auml;t Regensburg</strong> (ranked 395th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Universit&auml;t Bayreuth</strong> (ranked 481-490th place in the world)</p>";

}

else if (Session.city == "Singapore"){

$scope.theschools ="<p class=\"rankedtext title\">International Schools in Singapore:</p>\
\
<p class=\"rankedtext\"><strong>ISS International School Singapore</strong><br>\
21 Preston Rd, Singapore 109355<br>\
Phone Number: +65 6475 4188</p>\
\
<p class=\"rankedtext\"><strong>Australian International School Singapore</strong><br>\
1 Lorong Chuan, Singapore 556818<br>\
Phone Number: +65 6883 5155</p>\
\
<p class=\"rankedtext\"><strong>Red Swastika School</strong><br>\
350 Bedok North Ave 3, Singapore 469719<br>\
Phone Number: +65 6443 0380</p>\
\
<p class=\"rankedtext\"><strong>Global Indian International School</strong><br>\
Queenstown Campus<br>\
Phone Number: +65 6508 3700</p>\
\
<p class=\"rankedtext\"><strong>Singapore American School</strong><br>\
40 Woodlands Street 41, Singapore 738547<br>\
Phone Number: +65 6363 3403</p>\
\
<p class=\"rankedtext title\">Top Universities in Singapore:</p>\
\
<p class=\"rankedtext\"><strong>National University of Singapore</strong> (ranked 22th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Nanyang Technological University</strong> (ranked 39th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Singapore Management University</strong></p>";

}

else if (Session.city == "London"){

$scope.theschools ="<p class=\"rankedtext title\">Secondary Schools in London:</p>\
\
<p class=\"rankedtext\"><strong>Canons High School</strong><br>\
Shaldon Road, Edgware, Middlesex HA8 6AN<br>\
Phone Number: +44 20 8951 5780</p>\
\
<p class=\"rankedtext\"><strong>Kingsbury High School</strong><br>\
Princes Avenue, London NW9 9JR<br>\
Phone Number: +44 20 8206 3000</p>\
\
<p class=\"rankedtext\"><strong>Wanstead High School</strong><br>\
Redbridge Lane West, London E11 2JZ<br>\
Phone Number: +44 20 8989 2791</p>\
\
<p class=\"rankedtext\"><strong>Woodside High School</strong><br>\
White Hart Lane, London N22 5QJ<br>\
Phone Number: +44 20 8889 6761</p>\
\
<p class=\"rankedtext\"><strong>Phoenix High School</strong><br>\
The Curve, Shepherds Bush, London W12 0RQ<br>\
Phone Number: +44 20 8749 1141</p>\
\
<p class=\"rankedtext title\">Top Universities in London:</p>\
\
<p class=\"rankedtext\"><strong>Imperial College London</strong> (ranked 2th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>University College London</strong> (ranked 5th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>King's College London</strong> (ranked 16th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>London School of Economics and Political Science</strong> (ranked 71th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Queen Mary, University of London</strong> (ranked 98th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Royal Holloway, University of London</strong> (ranked 275th place in the world)</p>";

}

else if (Session.city == "Birmingham"){

$scope.theschools ="<p class=\"rankedtext title\">Top Secondary Schools in Birmingham:</p>\
\
<p class=\"rankedtext\"><strong>King Edward VI Camp Hill School for Boys</strong><br>\
Vicarage Road, Kings Heath, Birmingham, B14 7QJ<br>\
Phone Number: 0121 4443188</p>\
\
<p class=\"rankedtext\"><strong>King Edward VI Camp Hill School for Girls</strong><br>\
Vicarage Road, Kings Heath, Birmingham, B14 7QJ<br>\
Phone Number: 0121 4442150</p>\
\
<p class=\"rankedtext\"><strong>King Edward VI Handsworth School</strong><br>\
Rose Hill Road, Birmingham, B21 9AR<br>\
Phone Number: 0121 5542342</p>\
\
<p class=\"rankedtext\"><strong>King Edward VI Five Ways School</strong><br>\
Scotland Lane, Bartley Green, Birmingham, B32 4BT<br>\
Phone Number: 0121 4753535</p>\
\
<p class=\"rankedtext\"><strong>King Edward VI Aston School</strong><br>\
Frederick Road, Aston, Birmingham, B6 6DJ<br>\
Phone Number: 0121 3271130</p>\
\
<p class=\"rankedtext title\">Top Universities in Birmingham:</p>\
\
<p class=\"rankedtext\"><strong>University of Birmingham</strong> (ranked 64th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Aston University</strong> (ranked 400th place in the world)</p>\
\
<p class=\"rankedtext\"><strong>Open University</strong></p>";

}

else {

$scope.theschools ="<p class=\"rankedtext title\">Top Secondary Schools in Leeds:</p>\
\
<p class=\"rankedtext\"><strong>Roundhay School</strong><br>\
Gledhow Lane, Roundhay, Leeds, LS8 1ND<br>\
Phone Number: 0113 3931200</p>\
\
<p class=\"rankedtext\"><strong>Garforth Academy</strong><br>\
Lidgett Lane, Garforth, Leeds, LS25 1LJ<br>\
Phone Number: 0113 3368600</p>\
\
<p class=\"rankedtext\"><strong>Guiseley School</strong><br>\
Fieldhead Road, Guiseley, Leeds, LS20 8DT<br>\
Phone Number: 01943 872315</p>\
\
<p class=\"rankedtext\"><strong>The Morley Academy</strong><br>\
Fountain Street, Morley, Leeds, LS27 0PD<br>\
Phone Number: 0113 2532952</p>\
\
<p class=\"rankedtext\"><strong>Allerton High School</strong><br>\
King Lane, Leeds, LS17 7AG<br>\
Phone Number: 0113 3368484</p>\
\
<p class=\"rankedtext title\">Top University in Leeds:</p>\
\
<p class=\"rankedtext\"><strong>University of Leeds</strong></p>";

}

})