'use strict';

angular.module('adminDashboardPage', ['ngRoute'])

.controller('adminDashboardPageCtrl', function($scope, $http, $window, OperrHttpService) {
	var self = this;
	self.status = "";
	self.header = "";
	
	self.get_dashboard = function(){
		self.pattern = "/get_dashboard";
		self.data = '{"id":"1"}';
		self.result = OperrHttpService.get(self.pattern, self.data);
	}
});
