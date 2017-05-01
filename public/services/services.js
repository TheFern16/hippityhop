angular.module('lyrics')
  .service('lyricsServices', function($http, $window) {
    this.getLyrics = function(param, callback) {
      $http({
        method: 'GET',
        url: 'http://127.0.0.1:1337/lyrics',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
      }).then((res) => {
        callback(res);
      })
    }
  })