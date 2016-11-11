'use strict';

define(['jquery',
    'angular',
    'bootstrap',
    'angular-bootstrap',
    'jquery-gridalicious',
    'routes'
], function ($, angular) {

    var app = angular.module('coreApp', ['app.routes']);
    app.controller('mainCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $rootScope.test = {id: 1, name: "Yi Wang"}
    }]);
    return app;

});