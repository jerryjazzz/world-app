// App is only about configuration and router

expats.config(function($stateProvider, $urlRouterProvider, USER_ROLES) {
        "use strict";

        /* Set up the states for the application's different sections. */
        $stateProvider
        
            .state('index', {url: '/index', abstract: true, templateUrl: 'views/menu_out.html'})
            .state('index.login', {url: '/login', views: { 'menuContent':{ templateUrl: 'views/account/login.html', controller: 'LoginController' } } })
            .state('index.recovery', {url: '/recovery', views: { 'menuContent':{ templateUrl: 'views/account/recovery.html', controller: 'accountController' } } })
            .state('index.register', {url: '/register', views: { 'menuContent':{ templateUrl: 'views/account/register.html', controller: 'accountController' } } })
            .state('index.remove', {url: '/remove', views: { 'menuContent':{ templateUrl: 'views/account/remove.html', controller: 'accountController' } } })

            // for testing //.state('app', {url: '/app', abstract: true, templateUrl: 'views/menu.html'})
            .state('app', {url: '/app', abstract: true, templateUrl: 'views/menu.html', data: { authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor] } })
            .state('app.country', {url: '/country', views: { 'menuContent':{ templateUrl: 'views/account/country.html', controller: 'countryController' } } })
            .state('app.profile', {url: '/profile', views: { 'menuContent':{ templateUrl: 'views/account/profile.html', controller: 'accountController' } } })
            .state('app.account', {url: '/account', views: { 'menuContent':{ templateUrl: 'views/account/index.html', controller: 'accountController' } } })
            .state('app.about', {url: '/about', views: { 'menuContent':{ templateUrl: 'views/about.html', controller: 'aboutController' } } })
            .state('app.contact', {url: '/contact', views: { 'menuContent':{ templateUrl: 'views/contact.html', controller: 'contactController' } } })
            .state('app.forum', {url: '/forum', views: { 'menuContent':{ templateUrl: 'views/forum/index.html', controller: 'forumController' } } })
            .state('app.chat', {url: '/chat', views: { 'menuContent':{ templateUrl: 'views/forum/content.html', controller: 'chatController' } } })
            .state('app.education', {url: '/education', views: { 'menuContent':{ templateUrl: 'views/education/index.html', controller: 'educationController' } } })
            .state('app.culture', {url: '/culture', views: { 'menuContent':{ templateUrl: 'views/culture/index.html', controller: 'cultureController' } } })
            .state('app.transportation', {url: '/transportation', views: { 'menuContent':{ templateUrl: 'views/transportation/index.html', controller: 'transportationController' } } })
            .state('app.visa', {url: '/visa', views: { 'menuContent':{ templateUrl: 'views/visa/index.html', controller: 'visaController' } } })
            .state('app.tax', {url: '/tax', views: { 'menuContent':{ templateUrl: 'views/tax/index.html', controller: 'taxController' } } })
            .state('app.climate', {url: '/climate', views: { 'menuContent':{ templateUrl: 'views/climate/index.html', controller: 'climateController' } } })
            .state('app.general', {url: '/general', views: { 'menuContent':{ templateUrl: 'views/general/index.html', controller: 'generalController' } } })
            .state('app.review', {url: '/review/:id', views: { 'menuContent':{ templateUrl: 'views/general/content.html', controller: 'reviewController' } } })

        ;
        $urlRouterProvider.otherwise('/index/login');

})

expats.config(function ($httpProvider) {
  $httpProvider.interceptors.push([
    '$injector',
    function ($injector) {
      return $injector.get('AuthInterceptor');
    }
  ]);
})

expats.run(function ($rootScope, AUTH_EVENTS, AuthService) {
  $rootScope.$on('$stateChangeStart', function (event, next) {
    if (next.data) {
      var authorizedRoles = next.data.authorizedRoles;
      if (!AuthService.isAuthorized(authorizedRoles)) {
        event.preventDefault();
        if (AuthService.isAuthenticated()) {
          // user is not allowed
          $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
         //alert("user is not allowed"); //DELETE
        } else {
          // user is not logged in
          $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
          //alert("user is not logged"); // DELETE
        }
      }
    }
  });
})


