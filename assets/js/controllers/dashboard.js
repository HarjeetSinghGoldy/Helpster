'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of myApp
 */
angular.module('myApp')
  .controller('DashboardCtrl', function($scope, $state) {

    $scope.$state = $state;

  });
