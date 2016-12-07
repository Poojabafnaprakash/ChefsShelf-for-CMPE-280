'use strict';

angular.module('myApp.userAuth', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/userAuth', {
    templateUrl: '/user/userAuth.html',
    controller: 'UserAuthCtrl'
  });
}])

.controller('UserAuthCtrl', function($scope, $http) {
  $scope.invalid_login = true;
  	$scope.unexpected_error = true;

  	$scope.signIn = function() {
      console.log($scope.email);
      console.log($scope.password);
  		$http({
  			method : "POST",
  			url : '/users/create',
  			data : {
  				"email" : $scope.email,
  				"password" : $scope.password
  			}
  		}).success(function(data) {
  			// checking the response data for statusCode
  			if (data.statusCode == 401) {
  				$scope.invalid_login = false;
  				$scope.unexpected_error = true;
  			} else
  				// Making a get call to the '/redirectToHomepage' API

  				window.location.assign("/");
  		}).error(function(error) {
  			$scope.unexpected_error = false;
  			$scope.invalid_login = true;
  		});
  	};

    $scope.register = function() {
      console.log($scope.fullname);
      console.log($scope.email);
      console.log($scope.phoneNumber);
      console.log($scope.email);
      console.log($scope.password);
      console.log($scope.confirmPassword);
      console.log($scope.usertype);

		$http({
			method : "POST",
			url : '/register',
			data : {
				"fullname" : $scope.fullname,
				"email" : $scope.email,
				"phoneNumber" : $scope.phoneNumber,
				"password" : $scope.password,
				"confirmPassword" : $scope.confirmPassword,
        "usertype": $scope.usertype
			}
		}).success(function(data) {
			// checking the response data for statusCode

			// Making a get call to the '/redirectToHomepage' API
			window.location.assign("/");
		}).error(function(error) {
			$scope.unexpected_error = false;
		});
	};




});
