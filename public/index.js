angular.module('lyrics', [])
  .controller('lyricsCtrl', function($scope, lyricsServices, $window) {
    $scope.myLyrics = [];

    lyricsServices.getLyrics('', function({data}){
      data.forEach(lyric => $scope.myLyrics.push(lyric.lyric));
    })

    $scope.addLyric = function() {
      var newLyric = $scope.newLyric;
      lyricsServices.addLyric(newLyric, function(data) {
        $window.location.reload();
      })
    }


  }).directive('lyricsList', function() {
    return {
      scope: {
        lyrics: '<'
      },
      restrict: 'E',
      controllerAs: 'props',
      bindToController: true,
      controller: function() {},
      template: `
        <ul>
          <li ng-repeat="lyric in props.lyrics track by $index">
            {{ lyric }}
          </li>
        </ul>
      `
    }
  })