'use strict';

angular.module('myApp.contactUs', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contactUs', {
    templateUrl: 'contactUs/contactUs.html',
    controller: 'ContactUsCtrl'
  });
}])

.controller('ContactUsCtrl', [function() {

}]);
