(function() {
  function config($locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
  }

  angular
    .module('Bloctime', [])
    .config(config);
})();