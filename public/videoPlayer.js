angular.module('lyrics')
  .controller('videoCtrl', function($scope) {
  })
  .directive('videoPlayer', function($sce) {
    return {
      scope: {
        video: '<'
      },
      restrict: 'E',
      controller: 'videoCtrl',
      controllerAs: 'ctrl',
      bindToController: true,
      controller: function($scope) {
        this.videoUrl = ($scope) => {
          var v = this.video ? `https://www.youtube.com/embed/${this.video}` : '';
          return $sce.trustAsResourceUrl(v);
        }
      },
      link: function(scope, elem, attr) {
      },
      template: `
        <div class="videoContainer">

          <div class="video-player">
            <iframe width="1024" height="600" ng-src="{{ctrl.videoUrl()}}" frameborder="0" allowfullscreen></iframe>
          </div>

        </div>
      `
    }
  });