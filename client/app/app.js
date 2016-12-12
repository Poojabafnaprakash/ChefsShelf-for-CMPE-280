'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.userAuth',
  'myApp.contactUs',
  'myApp.about',
  'myApp.shoppingcart',
  'myApp.chefProfile',
  'myApp.logout',
  'myApp.orders'
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
  .when('/about', {
    templateUrl: '/about/about.html',
    controller: 'AboutCtrl'
  })
  .when('/shoppingcart', {
    templateUrl: '/shoppingcart/shoppingcart.html',
    controller: 'ShoppingcartCtrl'
  })
  .when('/chefProfile', {
    templateUrl: '/chefProfile/chefProfile.html',
    controller: 'ChefProfileCtrl'
  })
  .when('/logout', {
    //templateUrl: '/logout/logout.html',
    controller: 'LogoutCtrl'
  })
}]);
