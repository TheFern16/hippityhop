angular.module('lyrics', [])
  .controller('lyricsCtrl', function($scope, lyricsServices, $window) {
    $scope.myLyrics = [];
    $scope.currentSong = 'GF8aaTu2kg0';


    lyricsServices.getLyrics('', function({data}){
      data.forEach(lyric => $scope.myLyrics.push(lyric.lyric));
    })

    $scope.addLyric = function() {
      var newLyric = $scope.newLyric;
      lyricsServices.addLyric(newLyric, function(data) {
        $window.location.reload();
      })
    }

    // lyricsServices.searchYouTube('hip hop', function(res) {
    //   console.log(res, 'this is the response');
    //   $scope.currentSong = res[0].id.videoId;
    // })

  }).directive('lyricsList', function() {
    return {
      scope: {
        lyrics: '<',
        song: '<'
      },
      restrict: 'E',
      controllerAs: 'ctrl',
      bindToController: true,
      controller: function($scope) {},
      template: `
        <video-player video="ctrl.song"></video-player />
        <ul class="lyricsList">
          <li class="lyricItem" ng-repeat="lyric in ctrl.lyrics track by $index">
            "{{lyric}}"
          </li>
        </ul>
      `
    }
  })