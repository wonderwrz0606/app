'use strict';

angular.module('adminLoginPage', [
	'ngRoute',
	'coreService',
	'coreApp.header',
	'coreApp.footer'
])

.controller('adminLoginPageCtrl', function($scope, $http, $window, OperrHttpService, OperrLoginInfoService) {
	var self = this;
	self.username = '';
	self.password = '';
//	$http.defaults.headers.common['Authorization'] = "Isjimo";
	
	self.login = function(){
		self.pattern = '/login_test';
		self.data = '{"username":"' + self.username + '","password":' + self.password + '}';
		self.promise = OperrHttpService.post(self.pattern, self.data);
		self.promise
		.then(
			function(response){
				if(response.data.result == "SUCCESS"){
					self.admin = response.data.data.admin;
					OperrLoginInfoService.setAdmin(self.admin);
					
					self.pattern = '/get_admin_menu';
					self.data = '{"admin_id":' + self.admin.id + '}';
					self.promise = OperrHttpService.post(self.pattern, self.data);
					self.promise
					.then(
						function(response){
							if(response.data.result == "SUCCESS"){
								self.menu = response.data.data.menu_list;
								OperrLoginInfoService.setHeaderMenu(self.menu);
								$window.location.href = '#/admin/dashboard/view';
							}else{
								alert('Login Error! No info for header.');
							}
						},
						function(response){
							alert("Login Error! adminHeader Error.");
						}
					);
				}else{
					alert("Login Error! Invalid username/password.");
				}
			},
			function(response){
				alert("Login Error! AdminLoginPageController Error.");
			}
		);
	}
	
//	self.login = function(){
//			$http.post('/laravel/public/admin/login_test','{"username":"' + self.username + '","password":"' + self.password + '"}')
//			.then(function(response){
//				self.status = response.data.status;
//				self.header = response.data.header;
//				if(self.status == "SUCCESS"){
//					$window.location.href = '#/admin/dashboard/view';
//				}
//			}, function(response){
//				slef.status = response.data.status;
//				self.header = response.data.header;
//		});
//	}
});
