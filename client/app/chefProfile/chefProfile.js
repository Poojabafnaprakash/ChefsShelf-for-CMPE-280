'use strict';

angular.module('myApp.chefProfile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/chefProfile', {
    templateUrl: 'chefProfile/chefProfile.html',
    controller: 'ChefProfileCtrl'
  });
}])

.controller('ChefProfileCtrl', function($scope, $http) {
  $http.get('/getProfilePictures').success(function(response){
           $scope.data = response.message;
       });

});
