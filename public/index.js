angular.module('lyrics', [])
  .controller('lyricsCtrl', function($scope, lyricsServices) {
    $scope.hello = 'hello world';
    lyricsServices.getLyrics('', function({data}){
      console.log(data);
    })
  })