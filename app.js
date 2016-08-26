'use strict';

// Declare app level module which depends on views, and components
angular.module('coreApp', [
  'ngRoute',
  'adminMgmtPage',
  'adminLoginPage',
  'coreApp.version',
  'coreApp.header',
  'coreApp.footer'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $routeProvider
    .when("/admin", {
    	templateUrl : "adminMgmtPage/adminMgmtPage.template.html",
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
    .when("/sam", {
    	templateUrl : "samPage/samPage.html",
    	caseInsensitiveMatch : false
    })
    .otherwise('/admin/login');
}]);
