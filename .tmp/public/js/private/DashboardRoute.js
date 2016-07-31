/**
 * Created by harjeet on 8/4/16.
 */


angular.module('DashboardModule').config (function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('','/overview');
  //$urlRouterProvider.otherwise('/overview');
  $stateProvider
    .state('overview',{
      url:  '/overview',
      //parent: 'dashboard',
      templateUrl:  'templates/dashboard/overview.ejs',
      controller: 'OverviewController'
    })
    .state('reports',{
      url:  '/reports',
      //parent: 'dashboard',
      templateUrl:  'templates/dashboard/report.ejs',
      controller: 'ReportController'
    })

});
