'use strict';

angular.module('adminDashboardPage', ['ngRoute'])

.controller('adminDashboardPageCtrl', function($scope, $http, $window, OperrHttpService) {
	var self = this;
	var pattern = "/get_dashboard_info";
	var data = {id:1};
	self.promise = OperrHttpService.get(pattern, data);
	self.promise
		.then(
			function(response){
				alert(response.data.result);
			}
		);
});
