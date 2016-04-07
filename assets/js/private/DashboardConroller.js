/**
 * Created by harjeet on 7/4/16.
 */

angular.module('DashboardModule').controller('DashboardController',['$scope','$http','$window','toastr', function($scope, $http, $window, toastr){

  $scope.test = {
    demo: "Its workings"
  }

}]);
