'use strict';

// Declare app level module which depends on views, and components
angular.module('coreApp', [
  'ngRoute',
  'adminLoginPage',
  'adminDashboardPage',
  'adminMgmtPage'
])

.constant('CONFIG', {
	DOMAIN: '/laravel/public/admin'
})

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $routeProvider
    .when("/admin/dashboard/view", {
    	templateUrl : "adminDashboardPage/adminDashboardPage.view.html",
    	controller: 'adminDashboardPageCtrl',
    	controllerAs : 'adminDashboardCtrl',
    	caseInsensitiveMatch : false
    })
    .when("/admin/adminMgmt/view", {
    	templateUrl : "adminMgmtPage/adminMgmtPage.view.html",
    	controller: 'adminMgmtPageCtrl',
    	controllerAs : 'adminMgmtCtrl',
    	caseInsensitiveMatch : false
    })
    .when("/admin/adminMgmt/create/:createId", {
    	templateUrl : "adminMgmtPage/adminMgmtPage.create.html",
    	controller: 'adminMgmtPageCtrl',
    	controllerAs : 'adminMgmtCtrl',
    	caseInsensitiveMatch : false
    })
    .when("/admin/adminMgmt/update/:adminId", {
    	templateUrl : "adminMgmtPage/adminMgmtPage.update.html",
    	controller: 'adminMgmtPageCtrl',
    	controllerAs : 'adminMgmtCtrl',
    	caseInsensitiveMatch : false
    })
    .when("/admin/login/view",{
    	templateUrl : "adminLoginPage/adminLoginPage.view.html",
    	controller: 'adminLoginPageCtrl',
    	controllerAs : 'adminLoginCtrl',
    	caseInsensitiveMatch : false
    })
    .otherwise('/admin/login/view');
}]);
