'use strict';

angular.module('coreApp.header',[
	'coreService'
])

.component('appHeader', {
	templateUrl: 'components/header/header.html',
	controller: function headerController($window, OperrLoginInfoService) {
		var self = this;
		self.admin = OperrLoginInfoService.getAdmin();
		self.result = OperrLoginInfoService.getHeaderMenu();
		if(!self.admin){
			$window.location.href = '#/admin/login/view';
		}
	}
});