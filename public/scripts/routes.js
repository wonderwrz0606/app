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
                .state('admin', {
                    url: '/admin',
                    views: {
                        'header': {
                            templateUrl: "components/header/header.html"
                        },

                        'content': {
                            templateUrl: "adminLoginPage/adminLoginPage.view.html",
                            controller: 'adminLoginCtrl',
                            controllerAs: 'adminLoginCtrl'
                        },

                        'footer': {
                            templateUrl: "components/footer/footer.html"
                        }
                    }
                })

                .state("admin.dashboard", {
                    url: "/dashboard",
                    views: {
                        'header': {
                            templateUrl: "components/adminHeader/adminHeader.html",
                            controller: 'adminMgmtCtrl',
                            controllerAs: 'adminMgmtCtrl'
                        },

                        'content': {
                            templateUrl: "adminDashboardPage/adminDashboardPage.view.html",
                            controller: 'adminDashboardCtrl',
                            controllerAs: 'adminDashboardCtrl'
                        }
                    }
                });

            $urlRouterProvider.otherwise('/admin');

        }]);


});
