define(['angular', 'angular-ui-router'],function(angular){

    return angular.module('app.routes', ['ui.router']).config(['$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        '$urlMatcherFactoryProvider',function($stateProvider,
                                              $urlRouterProvider,
                                              $locationProvider,
                                              $urlMatcherFactoryProvider){

            // see "http://stackoverflow.com/questions/16677528/location-switching-between-html5-and-hashbang-mode-link-rewriting"
            $locationProvider.html5Mode(true).hashPrefix('!');

            // false to match URL in a case sensitive manner; otherwise true
            $urlMatcherFactoryProvider.caseInsensitive(true);
            // false to match trailing slashes in URLs
            $urlMatcherFactoryProvider.strictMode(false);

            $stateProvider
                .state('adminSecure',{
                    url: "/admin",
                    abstract: true,
                    template:'<div ui-view="header"></div><div ui-view="content"></div><div ui-view="footer"></div>',
                    resolve:{
                        secureNum : function(){
                            console.warn('Current State: "adminSecure"');
                        },
                        data: function($q, $state, $timeout) {
                            var deferred = $q.defer();

                            $timeout(function() {
                                if (true) {
                                    debugger;
                                    $state.go('adminLoginTest');
                                    deferred.reject();
                                } else {
                                    deferred.resolve();
                                }
                            });

                            return deferred.promise;
                        }
                    }
                })
                // .state('adminSecure.login', {
                //     url: '/login',
                //     template:'<button ui-sref="secure.dashboard">Nav to Dashboard State</button>',
                //     resolve: {
                //         data: [function () {
                //             console.warn('Current State: "adminSecure.admin"');
                //         }]
                //     },
                //     parent:'adminSecure'
                // })
                .state("adminSecure.dashboard", {
                    url: "/dashboard",
                    template:'<button ui-sref="adminSecure.admin">Nav to Admin State</button>',
                    resolve: {
                        data: [function () {
                            console.warn('Current State: "adminSecure.dashboard"');
                        }]
                    },
                    parent:'adminSecure'
                })

                /*TODO*/
                // Single login state for Admin user use
                .state('adminLoginTest', {
                    url: '/adminLoginTest',
                    templateUrl:'views/admin-views/adminLoginPage.html',
                    resolve: {
                        data: [function () {
                            console.warn('Current State: "adminLoginTest"');
                        }]
                    }
                })
                // templateUrl:'<div>Admin Login Test Page</div>',

                /*TODO*/
                // Single login state for normal user use
                .state('userLoginTest', {
                    url: '/userLoginTest',
                    template:'<div>User Login Test Page</div>',
                    resolve: {
                        data: [function () {
                            console.warn('Current State: "userLoginTest"');
                        }]
                    }
                });

            $urlRouterProvider.otherwise('/admin/dashboard');


            /*TODO We need a top level login page or access deny page for selecting "admin" or "user" login*/

            ////Navigate to a top level login page or an Access Deny Page for user to navigate to the right URL
            // $urlRouterProvider.otherwise('/loginChoice');

        }]);


});


// .state('userSecure', {
//     url: '/user',
//     abstract: true,
//     template:'<button ui-sref="userSecure.dashboard">Nav to Dashboard State</button>',
//     resolve: {
//         data: [function () {
//             console.warn('Current State: "userSecure"');
//         }]
//     }
// })
//     .state("userSecure.dashboard", {
//         url: "/dashboard2",
//         template:'<button ui-sref="userSecure.admin">Nav to Admin State</button>',
//         resolve: {
//             data: [function () {
//                 console.warn('Current State: "userSecure.dashboard"');
//             }]
//         }
//     });




// .state('home.admin', {
//     url: '/admin',
//     resolve: {
//         data: [function () {
//             console.warn('Current State: "home.admin"');
//         }]
//     },
//     views: {
//         'header': {
//             templateUrl: "components/header/header.html"
//         },
//
//         'content': {
//             templateUrl: "adminLoginPage/adminLoginPage.view.html",
//             controller: 'adminLoginCtrl',
//             controllerAs: 'adminLoginCtrl'
//         },
//
//         'footer': {
//             templateUrl: "components/footer/footer.html"
//         }
//     }
// })
//
//     .state("home.dashboard", {
//         url: "/dashboard",
//         resolve: {
//             data: [function () {
//                 console.warn('Current State: "list2"');
//             }]
//         },
//         views: {
//             'header': {
//                 templateUrl: "components/adminHeader/adminHeader.html",
//                 controller: 'adminMgmtCtrl',
//                 controllerAs: 'adminMgmtCtrl'
//             },
//
//             'content': {
//                 templateUrl: "adminDashboardPage/adminDashboardPage.view.html",
//                 controller: 'adminDashboardCtrl',
//                 controllerAs: 'adminDashboardCtrl'
//             }
//         }
//     });