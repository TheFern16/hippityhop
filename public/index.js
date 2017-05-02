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

  }).directive('lyricsList', function(lyricsServices) {
    return {
      scope: {
        lyrics: '<',
        song: '<'
      },
      restrict: 'E',
      controllerAs: 'ctrl',
      bindToController: true,
      controller: function($scope) {
        this.searchVid = (item) => {
          lyricsServices.searchYouTube(item, function(res) {
            $scope.ctrl.song = res[0].id.videoId
          });
        }
      },
      template: `
        <video-player video="ctrl.song"></video-player />
        <ul class="lyricsList">
          <li
            class="lyricItem"
            ng-click="ctrl.searchVid(lyric)"
            ng-repeat="lyric in ctrl.lyrics track by $index"
          >
            "{{lyric}}"
          </li>
        </ul>
      `
    }
  })