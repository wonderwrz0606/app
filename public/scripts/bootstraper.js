require(['config'], function(config) {
    'use strict';
    require(['angular','app'], function(angular, app) {
        console.log(app);
        angular.bootstrap(document, [app.name]);
    });
});