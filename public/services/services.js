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

    this.addLyric = function(param, callback) {
      $http({
        method: 'POST',
        url: 'http://127.0.0.1:1337/lyrics',
        headers: { 'Content-Type': 'application/json' },
        data: {
          lyric: param
        }
      }).then((res) => {
        callback(res);
      });
    }

  });
