'use strict';

angular.module('myApp.logout', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/logout', {
    //templateUrl: 'logout/logout.html',
    controller: 'LogoutCtrl'
  });
}])

.controller('LogoutCtrl', function($scope, $http) {
    $scope.invalid_login = true;
    	$scope.unexpected_error = true;
      $http.get('/logout').
        then(function(response) {
          console.log("in angular logout "+response);

          window.location.assign("/");

    });

});
