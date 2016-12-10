'use strict';

angular.module('myApp.chefProfile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/chefProfile', {
    templateUrl: 'chefProfile/chefProfile.html',
    controller: 'ChefProfileCtrl'
  });
}])

.controller('ChefProfileCtrl', [function() {

}]);
