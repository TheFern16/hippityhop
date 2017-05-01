angular.module('lyrics', [])
  .controller('lyricsCtrl', function($scope, lyricsServices) {
    $scope.myLyrics = [];
    lyricsServices.getLyrics('', function({data}){
      data.forEach(lyric => $scope.myLyrics.push(lyric.lyric));
    })
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