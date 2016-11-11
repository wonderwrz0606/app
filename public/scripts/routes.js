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

                /*TODO Admin App Top Level Secure Checking State*/
                .state('adminSecure',{
                    url: "/admin",
                    abstract: true,
                    template:'<div ui-view="header"></div><div ui-view="content"></div><div ui-view="footer"></div>',
                    resolve:{
                        secureNum : function(){
                            console.warn('Current State: "adminSecure"');
                        },
                        data: function($q, $state, $timeout, $rootScope) {
                            var deferred = $q.defer();

                            //TODO Add Admin User Login Service   make it to "Asynchronous" call
                            // $rootScope.adminUserInfoObject = adminUserLoginService.getAdminUserInfo();

                            //TODO this  "$rootScope.adminUserInfoObject.adminId"  condition need to be changed
                            if(Boolean($rootScope.adminUserInfoObject)){
                                var adminUserInfoObject = $rootScope.adminUserInfoObject;
                            }else{
                                var adminUserInfoObject = {};
                            }

                            $timeout(function() {
                                if (!adminUserInfoObject.length) {
                                    // no user info detected, kick user to "adminLogin" Page
                                    $state.go('adminLogin');
                                    deferred.reject();
                                } else {
                                    // enter state because user info detected
                                    deferred.resolve();
                                }
                            });

                            return deferred.promise;
                        }
                    }
                })
                .state("adminSecure.dashboard", {
                    url: "/dashboard",
                    template:'<button ui-sref="adminSecure.admin">Nav to Admin State</button>',
                    parent:'adminSecure',
                    resolve: {
                        data: [function () {
                            console.warn('Current State: "adminSecure.dashboard"');
                        }]
                    }
                })
                .state('adminSecure.admin', {
                    url: '/admin',
                    template:'<button ui-sref="secure.dashboard">Nav to Dashboard State</button>',
                    parent:'adminSecure',
                    resolve: {
                        data: [function () {
                            console.warn('Current State: "adminSecure.admin"');
                        }]
                    }
                })
                .state('adminSecure.user', {
                    url: '/user',
                    template:'<button ui-sref="secure.dashboard">Nav to Dashboard State</button>',
                    parent:'adminSecure',
                    resolve: {
                        data: [function () {
                            console.warn('Current State: "adminSecure.user"');
                        }]
                    }
                })
                .state('adminSecure.driver', {
                    url: '/driver',
                    template:'<button ui-sref="secure.dashboard">Nav to Dashboard State</button>',
                    parent:'adminSecure',
                    resolve: {
                        data: [function () {
                            console.warn('Current State: "adminSecure.driver"');
                        }]
                    }
                })
                .state('adminSecure.vehicle', {
                    url: '/vehicle',
                    template:'<button ui-sref="secure.dashboard">Nav to Dashboard State</button>',
                    parent:'adminSecure',
                    resolve: {
                        data: [function () {
                            console.warn('Current State: "adminSecure.vehicle"');
                        }]
                    }
                })
                .state('adminSecure.billingTrip', {
                    url: '/billing_trip',
                    template:'<button ui-sref="secure.dashboard">Nav to Dashboard State</button>',
                    parent:'adminSecure',
                    resolve: {
                        data: [function () {
                            console.warn('Current State: "adminSecure.billingTrip"');
                        }]
                    }
                })
                .state('adminSecure.rateBook', {
                    url: '/rate_book',
                    template:'<button ui-sref="secure.dashboard">Nav to Dashboard State</button>',
                    parent:'adminSecure',
                    resolve: {
                        data: [function () {
                            console.warn('Current State: "adminSecure.rateBook"');
                        }]
                    }
                })
                .state('adminSecure.company', {
                    url: '/company',
                    template:'<button ui-sref="secure.dashboard">Nav to Dashboard State</button>',
                    parent:'adminSecure',
                    resolve: {
                        data: [function () {
                            console.warn('Current State: "adminSecure.company"');
                        }]
                    }
                })
                .state('adminSecure.base', {
                    url: '/base',
                    template:'<button ui-sref="secure.dashboard">Nav to Dashboard State</button>',
                    parent:'adminSecure',
                    resolve: {
                        data: [function () {
                            console.warn('Current State: "adminSecure.base"');
                        }]
                    }
                })
                .state('adminSecure.feedback', {
                    url: '/feedback',
                    template:'<button ui-sref="secure.dashboard">Nav to Dashboard State</button>',
                    parent:'adminSecure',
                    resolve: {
                        data: [function () {
                            console.warn('Current State: "adminSecure.feedback"');
                        }]
                    }
                })
                .state('adminSecure.dispatching', {
                    url: '/dispatching',
                    template:'<button ui-sref="secure.dashboard">Nav to Dashboard State</button>',
                    parent:'adminSecure',
                    resolve: {
                        data: [function () {
                            console.warn('Current State: "adminSecure.dispatching"');
                        }]
                    }
                })
                .state('adminSecure.map', {
                    url: '/map',
                    template:'<button ui-sref="secure.dashboard">Nav to Dashboard State</button>',
                    parent:'adminSecure',
                    resolve: {
                        data: [function () {
                            console.warn('Current State: "adminSecure.map"');
                        }]
                    }
                })
                .state('adminSecure.employee', {
                    url: '/employee',
                    template:'<button ui-sref="secure.dashboard">Nav to Dashboard State</button>',
                    parent:'adminSecure',
                    resolve: {
                        data: [function () {
                            console.warn('Current State: "adminSecure.employee"');
                        }]
                    }
                })
                .state('adminSecure.preSchedule', {
                    url: '/pre_schedule',
                    template:'<button ui-sref="secure.dashboard">Nav to Dashboard State</button>',
                    parent:'adminSecure',
                    resolve: {
                        data: [function () {
                            console.warn('Current State: "adminSecure.preSchedule"');
                        }]
                    }
                })


                /*TODO Admin App Login Page*/
                // Single login state for Admin user use
                .state('adminLoginSecure',{
                    abstract: true,
                    template:'<header ui-view="header"></header>' +
                             '<div ui-view="content" class="container main-content-container">' +
                             '</div><footer ui-view="footer"></footer>',
                    resolve:{
                        data: [function () {
                            console.warn('Current State: "adminLoginSecure"');
                        }]
                    }
                })
                .state('adminLogin', {
                    url: '/admin_login',
                    views:{
                        'header': {
                            templateUrl: 'views/adminViews/loginPage/adminLoginPageHeader.html'
                        },
                        'content': {
                            templateUrl: 'views/adminViews/loginPage/adminLoginPageContent.html'
                        },
                        'footer': {
                            templateUrl: 'views/adminViews/loginPage/adminLoginPageFooter.html'
                        }
                    },
                    parent: 'adminLoginSecure',
                    resolve: {
                        data: [function () {
                            console.warn('Current State: "adminLogin"');
                        }]
                    }
                })
                // template:'<div>Admin Login Test Page</div>',

                /*TODO User App Login Page*/
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


            /*TODO We need a top level login page or access deny page for selecting "admin" or "user" login*/

            $urlRouterProvider.otherwise('/admin/dashboard');
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