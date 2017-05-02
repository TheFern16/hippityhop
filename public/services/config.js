angular.module('lyrics', [])
.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**',
    'https://lit-wildwood-58440.herokuapp.com/'
  ]);
});
