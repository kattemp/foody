'use strict';

// Define the `foodyApp` module
var foodyApp = angular.module('foodyApp', []);

// Define the `RestaurantListController` controller on the `foodyApp` module
foodyApp.controller('RestaurantListController', function RestaurantListController($scope, $http) {
  $scope.title = "Food!"
  $scope.restaurants = [];
  $http.get('restaurants.json')
       .success(function(data) {
           $scope.restaurants = data;
       })
       .error(function(data,status,error,config){
           $scope.restaurants = [{heading:"Error",description:"Could not load json   data"}];
       });
});
