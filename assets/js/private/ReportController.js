/**
 * Created by harjeet on 8/4/16.
 */

angular.module('DashboardModule').controller('ReportController',['$scope','$http' ,function($scope, $http){

  $scope.me = {};

  $scope.notFound = false;

  $http.get("http://localhost:1337/page/userProfile")
    .success(function (data, status , config, header){

      if(data.notFound === true){

        $scope.notFound = false;
        return;
      }

      $scope.me = data.userData;
      console.log(data);
      console.log(config);



    })
    .error(function (data, status , config, header){
      console.log(data);
    })

}]);
