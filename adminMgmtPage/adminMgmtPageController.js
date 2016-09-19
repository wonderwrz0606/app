'use strict';

angular.module('adminMgmtPage', [
	'ngRoute',
	'coreService',
	'adminLoginService',
	'coreApp.header',
	'coreApp.footer'
])

.controller('adminMgmtPageCtrl', function($scope, $routeParams, HttpService, AdminLoginService) {
	var self = this;
	self.admin_user = AdminLoginService.getAdmin();
//	Get single admin info
	if($routeParams.adminId){
		self.data = '{"admin_id":' + $routeParams.adminId + '}';
		self.pattern = '/get_admin_info';
		self.promise = HttpService.post(self.pattern, self.data);
		self.promise
		.then(
			function(response){
				if(response.data.result == "SUCCESS"){
					self.admin = response.data.data.admin;
				}else{
					alert("adminMgmtPage Error! No info for admin.");
				}
			},
			function(response){
				alert("adminMgmtPage Error!");
			}
		);
	}else if($routeParams.createId){

	}else{
		self.data = '{"admin_id":' + self.admin_user.id + '}';
		self.pattern = '/get_admin_list';
		self.promise = HttpService.post(self.pattern, self.data);
		self.promise
		.then(
			function(response){
				if(response.data.result == "SUCCESS"){
					self.admin_list = response.data.data.admin_list;
				}else{
					alert("adminMgmtPage Error! No info for admin.");
				}
			},
			function(response){
				alert("adminMgmtPage Error!");
			}
		);
	}
});
