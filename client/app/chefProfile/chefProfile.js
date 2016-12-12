'use strict';

angular.module('myApp.chefProfile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/chefProfile', {
    templateUrl: 'chefProfile/chefProfile.html',
    controller: 'ChefProfileCtrl'
  });
}])

.controller('ChefProfileCtrl', function($scope, $http, $sessionStorage) {
  // $http.get('/getProfilePictures').success(function(response){
  //          $scope.data = response.message;
  //      });

    $http({
        method : "GET",
        url : '/getProfilePictures',
        params : {userid: $sessionStorage.user.userid}
      }).success(function(response) {
	        console.log(response);
	        $scope.data = response.message;
	      }).error(function(error) {
	      });

  $scope.userid = $sessionStorage.user.userid;
  console.log($scope.userid);
});
