'use strict';

angular.module('adminMgmtPage', ['ngRoute','coreService'])

.controller('adminMgmtPageCtrl', function($scope, OperrHttpService) {
	var self = this;
	self.name='adminMgmtPageNameCtrl';
	$scope.name='adminMgmtPageNameCtrl';
});