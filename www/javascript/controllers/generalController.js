// generalController

expats.controller('generalController', function($scope){

  $scope.message = 'This is my general content';

  $scope.reviews =  [
        {content: 'Review 1, I know this is an old question...',
        autor: 'Petronila Cienfuegos',
        date: 'March 14th, 2014',
        rate: 1,
        max: 5,
        area: 'General',
        review_id: 1},
        {content: 'Review 2, I know this is an old question...',
        autor: 'Seprefundio Perezdías',
        date: 'April 2dn, 2015',
        rate: 4,
        max: 5,
        area: 'Education',
        review_id: 2}   
  ];

  /*
  $scope.places = [
            {country: 'Spain', city: 'Madrid', presentation: 'Madrid, Spain', latitude: 40.416775, longitude: -3.703790},
            {country: 'Spain', city: 'Barcelona', presentation: 'Barcelona, Spain', latitude: 41.385064, longitude: 2.173403},
            {country: 'Spain', city: 'Sevilla', presentation: 'Sevilla, Spain', latitude: 37.389092, longitude: -5.984459},   
            {country: 'Australia', city: 'Sydney', presentation: 'Sydney, Australia', latitude: -33.867487, longitude: 151.206990},
            {country: 'Australia', city: 'Melbourne', presentation: 'Melbourne, Australia', latitude: -37.814107, longitude: 144.963280},
            {country: 'Australia', city: 'Brisbane', presentation: 'Brisbane, Australia', latitude: -27.471011, longitude: 153.023449},
            {country: 'New Zealand', city: 'Auckland', presentation: 'Auckland, NZ', latitude: -36.848460, longitude: 174.763332},
            {country: 'New Zealand', city: 'Wellington', presentation: 'Wellington, NZ', latitude: -41.286460, longitude: 174.776236},
            {country: 'New Zealand', city: 'Christchurch', presentation: 'Christchurch, NZ', latitude: -43.532054, longitude: 172.636225},
            {country: 'United States', city: 'New York', presentation: 'New York, NY', latitude: 440.712784, longitude: -74.005941},
            {country: 'United States', city: 'Los Angeles', presentation: 'Los Angeles, CA', latitude: 34.052234, longitude: -118.243685},
            {country: 'United States', city: 'Chicago', presentation: 'Chicago, IL', latitude: 41.878114, longitude: -87.629798},
            {country: 'United States', city: 'Houston', presentation: 'Houston, TX', latitude: 29.760427, longitude: -95.369803},
            {country: 'United States', city: 'Miami', presentation: 'Miami, FL', latitude: 25.761680, longitude: -80.191790},
            {country: 'Canada', city: 'Toronto', presentation: 'Toronto, Canada', latitude: 43.653226, longitude: -79.383184},
            {country: 'Canada', city: 'Vancouver', presentation: 'Vancouver, Canada', latitude: 49.282729, longitude: -123.120738},
            {country: 'Canada', city: 'Montreal', presentation: 'Montreal, Canada', latitude: 45.501689, longitude: -73.567256},
            {country: 'Germany', city: 'Berlin', presentation: 'Berlin, Germany', latitude: 52.520007, longitude: 13.404954},
            {country: 'Germany', city: 'Hamburg', presentation: 'Hamburg, Germany', latitude: 53.551085, longitude: 9.993682},
            {country: 'Germany', city: 'Munich', presentation: 'Munich, Germany', latitude: 48.135125, longitude: 11.581981},
            {country: 'Singapore', city: 'Singapore', presentation: 'Singapore', latitude: 1.280094, longitude: 103.850949},
            {country: 'United Kingdom', city: 'London', presentation: 'London, UK', latitude: 51.507351, longitude: -0.127758},
            {country: 'United Kingdom', city: 'Birmingham', presentation: 'Birmingham, UK', latitude: 52.486243, longitude: -1.890401},
            {country: 'United Kingdom', city: 'Leeds', presentation: 'Leeds, UK', latitude: 53.800755, longitude: -1.549077}
        ];
    */
})