require(['config'], function(config) {
    'use strict';
    require(['angular','app'], function(angular, app) {
        angular.bootstrap(document, [app.name]);
    });
});