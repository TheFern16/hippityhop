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
      });
    }

    $scope.delete = (item) => {
      var spliceIndex = $scope.myLyrics[item];
      lyricsServices.removeLyric($scope.myLyrics[item], function(res) {
        $window.location.reload();
      });
    }

  }).directive('lyricsList', function(lyricsServices, $window) {
    return {
      scope: {
        lyrics: '<',
        song: '<',
        remove: '<'
      },
      restrict: 'E',
      controllerAs: 'ctrl',
      bindToController: true,
      controller: function($scope) {
        this.count = 0;
        this.searchVid = (item) => {
          lyricsServices.searchYouTube(item, function(res) {
            if ($scope.ctrl.song === res[0].id.videoId) {
              $scope.ctrl.song = res[1].id.videoId;
            } else if ($scope.ctrl.song === res[1].id.videoId) {
              $scope.ctrl.song = res[2].id.videoId;
            } else if ($scope.ctrl.song !== res[0].id.videoId) {
              $scope.ctrl.song = res[0].id.videoId;
            }
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
            ng-hide="lyrics"
          >
            "{{lyric}}"
          <button ng-click="ctrl.remove($index)">remove</button>
          </li>
        </ul>
      `
    }
  });