angular.module('lyrics', ['ngRoute']).config(function($routeProvider) {
  console.log('here');
  $routeProvider
    .when('/rhymebook', {
      templateUrl: '/controllers/rhymebook.html',
      controller: 'rhymeCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
})