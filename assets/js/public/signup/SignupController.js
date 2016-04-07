/**
 * Created by harjeet on 31/3/16.
 */

angular.module('SignupModule').controller('SignupController',['$scope', '$http', '$window','$location' ,'toastr',function($scope, $http, $window, $location, toastr){


  $scope.sigupForm = {
    loading : false
  }

  $scope.submitSignupForm = function() {
    //Set the loading state spinner on
    $scope.sigupForm.loading = true;

    //Submit the sigup request to sails server
    console.log($scope.signupForm.password);
    $http.post('/signup',{
      firstname : $scope.signupForm.firstname,
      lastname  : $scope.signupForm.lastname,
      mobile    : $scope.signupForm.mobile,
      gender    : $scope.singupForm.gender,
      email     : $scope.signupForm.email,
      password:   $scope.signupForm.password
    })
      .then( function onSuccess(sailsResponse){
        window.location = '/';
      })
      .catch( function onError(sailsResponse){
        //handel unknow errors
        var emailAddressAlreadyInUse = sailsResponse.status == 409;

        if (emailAddressAlreadyInUse) {
          toastr.warning("Email address is already in use, please use other", 'Error',
            {
              "closeButton" : true,
              "positionClass": "toast-top-right"
            })
          return;
        }

      })
      .finally( function eiterWay() {
        $scope.submitSignupForm.loading = false
      })
  }

}]);
