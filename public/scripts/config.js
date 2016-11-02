'use strict';

requirejs.onError = function(err) {
    if (err.requireType === 'timeout') {
    }
    throw err;
};

require.config({
    enforceDefine: false,
    xhtml: false,
    waitSeconds: 15,
    config: {
        text: {
            env: 'xhr'
        }
    },
    paths: {
        config: 'config',
        app: 'app',
        jquery: '../bower_components/jquery/dist/jquery',
        'jquery-gridalicious': '../bower_components/gridalicious/jquery.grid-a-licious',
        angular: '../bower_components/angular/angular',
        'angular-resource': '../bower_components/angular-resource/angular-resource',
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
        'angular-bootstrap': '../bower_components/angular-bootstrap/ui-bootstrap',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap'
    },
    priority: [
        'jquery',
        'angular',
        'angular-resource',
        'angular-ui-router',
        'angular-bootstrap'
    ],
    shim: {
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'bootstrap':{
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        'angular-bootstrap': {
            deps: ['angular']
        },
        'jquery-gridalicious':{
            deps: ['jquery'],
            exports: 'jquery-gridalicious'
        }
    }
});