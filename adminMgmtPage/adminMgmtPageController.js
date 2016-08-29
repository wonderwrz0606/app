'use strict';

angular.module('adminMgmtPage', ['ngRoute','coreService'])

.controller('adminMgmtPageCtrl', function($scope, OperrHttpService) {
	var self = this;
	self.name='adminMgmtPageNameCtrl';
	$scope.name='adminMgmtPageNameCtrl';
	var pattern = "/get_dashboard_info";
	var data = {id:1};
	self.result = OperrHttpService.get(pattern, data);
});