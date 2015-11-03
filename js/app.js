var app = angular.module('app', ['ngMaterial', 'ngAnimate', 'ngRoute', 'ngTouch']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/home', {templateUrl: 'views/home.html'})
        .otherwise({redirectTo: '/home'});
}]);

// for release
//app.config(['$compileProvider', function ($compileProvider) {
//  $compileProvider.debugInfoEnabled(false);
//}]);

app.controller("EmptyController", [function() {
  var self = this;
}]);
