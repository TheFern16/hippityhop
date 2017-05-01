angular.module('lyrics')
  .controller('videoCtrl', function() {
    this.videoUrl = () => {
      // return this.video ? `https://www.youtube.com/embed/${this.video.id.videoId}` : '';
    }
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
      template: `
        <div class="videoContainer">

          <div class="video-player">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/GF8aaTu2kg0" frameborder="0" allowfullscreen></iframe>
          </div>

        </div>
      `
    }
  })