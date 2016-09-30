'use strict';

var app = angular.module('coreApp', [
  'ui.router',
  'coreApp.adminLogin',
  'coreApp.adminDashboard',
  'coreApp.adminMgmt'
]);

app.config(function($urlRouterProvider, $stateProvider) {
    $stateProvider
    .state('admin',{
      url: '/admin',
      views: {
            'header': {
                templateUrl : "components/header/header.html"
            },

            'content': {
                templateUrl: "adminLoginPage/adminLoginPage.view.html",
                controller: 'adminLoginCtrl',
              	controllerAs : 'adminLoginCtrl'
            },

            'footer':{
                templateUrl: "components/footer/footer.html"
            }
      }
    })

    .state("admin.dashboard", {
      url : "/dashboard",
      views: {
            'header': {
                templateUrl : "components/adminHeader/adminHeader.html",
                controller: 'adminMgmtCtrl',
                controllerAs : 'adminMgmtCtrl',
            },

            'content': {
                templateUrl: "adminDashboardPage/adminDashboardPage.view.html",
                controller: 'adminDashboardCtrl',
              	controllerAs : 'adminDashboardCtrl'
            }
        }
    })

    $urlRouterProvider.otherwise('/admin');
});

//Version2: Using ngRoute
// var app = angular.module('coreApp', [
//   'ngRoute',
//   'adminLogin',
//   'adminDashboard',
//   'adminMgmt'
// ]);
//
// // This part has moved to app.config.js file
// // app.constant('CONFIG', {
// // 	DOMAIN: '/laravel/public/admin'
// // })
//
// app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//     $routeProvider
//     .when("/admin/dashboard/view", {
//     	templateUrl : "adminDashboardPage/adminDashboardPage.view.html",
//     	controller: 'adminDashboardCtrl',
//     	controllerAs : 'adminDashboardCtrl',
//     	caseInsensitiveMatch : false
//     })
//     .when("/admin/adminMgmt/view", {
//     	templateUrl : "adminMgmtPage/adminMgmtPage.view.html",
//     	controller: 'adminMgmtCtrl',
//     	controllerAs : 'adminMgmtCtrl',
//     	caseInsensitiveMatch : false
//     })
//     .when("/admin/adminMgmt/create/:createId", {
//     	templateUrl : "adminMgmtPage/adminMgmtPage.create.html",
//     	controller: 'adminMgmtCtrl',
//     	controllerAs : 'adminMgmtCtrl',
//     	caseInsensitiveMatch : false
//     })
//     .when("/admin/adminMgmt/update/:adminId", {
//     	templateUrl : "adminMgmtPage/adminMgmtPage.update.html",
//     	controller: 'adminMgmtCtrl',
//     	controllerAs : 'adminMgmtCtrl',
//     	caseInsensitiveMatch : false
//     })
//     .when("/admin/login/view",{
//     	templateUrl : "adminLoginPage/adminLoginPage.view.html",
//     	controller: 'adminLoginCtrl',
//     	controllerAs : 'adminLoginCtrl',
//     	caseInsensitiveMatch : false
//     })
//     .otherwise('/admin/login/view');
// }]);
