'use strict';

angular.module('coreApp.header',[
	'adminLoginService'
])

.component('appHeader', {
	templateUrl: 'components/header/header.html',
	controller: function headerController($window, $location, AdminLoginService) {
		var self = this;
	}
});
