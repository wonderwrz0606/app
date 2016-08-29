'use strict';

// Declare app level module which depends on views, and components
angular.module('coreApp', [
  'ngRoute',
  'adminMgmtPage',
  'adminLoginPage',
  'adminDashboardPage',
  'coreApp.version',
  'coreApp.header',
  'coreApp.footer'
])

.constant('CONFIG', {
	DOMAIN: '/laravel/public/admin'
})

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $routeProvider
    .when("/admin/dashboard/view", {
    	templateUrl : "adminDashboardPage/adminDashboardPage.template.html",
    	controller: 'adminDashboardPageCtrl',
    	controllerAs : 'adminDashboardCtrl',
    	caseInsensitiveMatch : false
    })
    .when("/admin/mgmt/view", {
    	templateUrl : "adminMgmtPage/adminMgmtPageView.template.html",
    	controller: 'adminMgmtPageCtrl',
    	controllerAs : 'adminMgmtCtrl',
    	caseInsensitiveMatch : false
    })
    .when("/admin/mgmt/create", {
    	templateUrl : "adminMgmtPage/adminMgmtPageCreate.template.html",
    	controller: 'adminMgmtPageCtrl',
    	controllerAs : 'adminMgmtCtrl',
    	caseInsensitiveMatch : false
    })
    .when("/admin/login",{
    	templateUrl : "adminLoginPage/adminLoginPage.template.html",
    	controller: 'adminLoginPageCtrl',
    	controllerAs : 'adminLoginCtrl',
    	caseInsensitiveMatch : false
    })
    .otherwise('/admin/login');
}]);
