var app = angular.module('app');
app.controller("homeCtrl", [function() {
  var self = this; // keep a track on the 'real' this
  self.group = "pals";
}]);
