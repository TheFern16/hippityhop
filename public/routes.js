angular.module('lyrics').config(function($routeProvider, $locationProvider) {
  console.log('here');
  $routeProvider
    .when('/rhymebook', {
      templateUrl: 'pages/rhymebook.html',
      controller: 'rhymeCtrl'
    })
    .when('/', {
      templateUrl: 'pages/lyriclist.html',
      controller: 'lyricsCtrl'
    })
    otherwise({
      redirectTo: '/'
    })
  $locationProvider.html5Mode(true);
})