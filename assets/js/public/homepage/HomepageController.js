angular.module('HomepageModule').controller('HomepageController', ['$scope', '$http', '$window','$location' ,'toastr', function($scope, $http, $window, $location, toastr) {

  // set-up loginForm loading state
  $scope.loginForm = {
    loading: false
  };

  $scope.submitLoginForm = function() {

    // Set the loading state (i.e. show loading spinner)
    $scope.loginForm.loading = true;

    // Submit request to Sails.
    $http.put('/login', {
        email: $scope.loginForm.email,
        password: $scope.loginForm.password
      })
      .then(function onSuccess() {
        // Refresh the page now that we've been logged in.
        toastr.success('Sign in successfully...', 'Success', {
          "closeButton": true,
          "positionClass": "toast-top-right"
        })
        //$location.path('user/Signup');
        window.location = '/';//this function take http from current page to nextpage
      })
      .catch(function onError(sailsResponse) {

        // Handle known error type(s).
        // Invalid username / password combination.
        if (sailsResponse.status === 400 || 404) {
          // $scope.loginForm.topLevelErrorMessage = 'Invalid email/password combination.';
          toastr.warning('Invalid email/password combination.', 'Error', {

            "closeButton": true,
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": true,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",

          });
          return;
        }

        toastr.error('An unexpected error occurred, please try again.', 'Error', {
          "closeButton": true,
          "debug": true,
          "newestOnTop": false,
          "progressBar": true,
          "positionClass": "toast-top-right",
          "preventDuplicates": true,
          "onclick": null,
          "showDuration": "300",
          "hideDuration": "1000",
          "timeOut": "5000",
          "extendedTimeOut": "1000",
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"
        });

        return;

      })
      .finally(function eitherWay() {

        $scope.loginForm.loading = false;
      });
  };


}]);
