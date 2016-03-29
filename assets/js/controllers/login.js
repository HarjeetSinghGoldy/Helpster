'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of myApp
 */
angular.module('myApp')
        .controller('LoginCtrl', function ($scope, $location) {

            $scope.submit = function () {

                $location.path('/dashboard');

                return false;
            }

        });
