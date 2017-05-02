angular.module('lyrics')
  .service('lyricsServices', function($http, $window) {

    this.getLyrics = function(param, callback) {
      $http({
        method: 'GET',
        url: '/lyrics',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
      }).then((res) => {
        callback(res);
      })
    }

    this.addLyric = function(param, callback) {
      $http({
        method: 'POST',
        url: '/lyrics',
        headers: { 'Content-Type': 'application/json' },
        data: {
          lyric: param
        }
      }).then((res) => {
        callback(res);
      });
    }

    this.removeLyric = function(param, callback) {
      $http({
        method: 'DELETE',
        url: '/lyrics',
        headers: { 'Content-Type': 'application/json' },
        data: {
          lyric: param
        }
      }).then((res) => {
        callback(res);
      })
    }

    this.searchYouTube = function(query, callback) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          part: 'snippet',
          q: query,
          type: 'video',
          maxResult: 5,
          key: $window.YOUTUBE_API_KEY,
          videoEmbeddable: 'true'
        }
      }).then(({data}) => {
        if (callback) {
          callback(data.items);
        }
      });
    }
  });
