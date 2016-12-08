'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.userAuth',
  'myApp.contactUs'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider
   .when('/userAuth', {
    templateUrl: './user/userAuth.html',
    controller: 'UserAuthCtrl'
  })
  .when('/home', {
    templateUrl: '/home/home.html',
    controller: 'HomeCtrl'
  })
  .when('/contactUs', {
    templateUrl: '/contactUs/contactUs.html',
    controller: 'ContactUsCtrl'
  })
  .when('/', {
    templateUrl: '/home/home.html',
    controller: 'HomeCtrl'
  })
}]);
