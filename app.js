'use strict';

var app = angular.module('coreApp', [
  'ui.router',
  'adminLogin',
  'adminDashboard',
  'adminMgmt'
]);

app.config(function($urlRouterProvider, $stateProvider) {
    $stateProvider
    .state('admin',{
      abstract: true,
      url: '/admin',
      views: {
            'header': {
                templateUrl : "components/header/header.html"
            },

            'footer':{
                templateUrl: "components/footer/footer.html"
            }
      }
    })

    .state("admin.login", {
      url : "/login",
      views: {
            'content': {
                templateUrl: 'table-data.html',
                views: {
                  'test1@': {
                       templateUrl: 'adminLoginPage/adminLoginPage.view.html',
                   },
                  'test2@': {
                       templateUrl: 'adminLoginPage/adminLoginPage.view.html',
                   }
                }
            }
        }
    })

    // .state("admin.dashboard", {
    //   url : "/dashboard",
    //   views: {
    //         'header': {
    //             templateUrl : "components/adminHeader/adminHeader.html"
    //         },
    //
    //         'content': {
    //             templateUrl : "adminDashboardPage/adminDashboardPage.view.html",
    //             controller: 'adminDashboardCtrl',
    //           	controllerAs : 'adminDashboardCtrl'
    //         }
    //     }
    // })
    //
    // .state("adminMgmt", {
    //   url : "/admin/adminMgmt",
    //   views: {
    //         'header@dashboard': {
    //             templateUrl : "components/adminHeader/adminHeader.html"
    //         },
    //
    //         'content@dashboard': {
    //             templateUrl : "adminDashboardPage/adminDashboardPage.view.html",
    //             controller: 'adminDashboardCtrl',
    //           	controllerAs : 'adminDashboardCtrl'
    //         }
    //     }
    // })


    // .state("/admin/adminMgmt/create/:createId", {
    // 	templateUrl : "adminMgmtPage/adminMgmtPage.create.html",
    // 	controller: 'adminMgmtCtrl',
    // 	controllerAs : 'adminMgmtCtrl',
    // 	caseInsensitiveMatch : false
    // })
    // .state("/admin/adminMgmt/update/:adminId", {
    // 	templateUrl : "adminMgmtPage/adminMgmtPage.update.html",
    // 	controller: 'adminMgmtCtrl',
    // 	controllerAs : 'adminMgmtCtrl',
    // 	caseInsensitiveMatch : false
    // })

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
