'use strict';

angular.module('adminLoginPage', ['ngRoute','coreService'])

.controller('adminLoginPageCtrl', function($scope, $http, $window, OperrHttpService) {
	var self = this;
//	$http.defaults.headers.common['Authorization'] = "Isjimo";
	
	self.login = function(){
		self.pattern = '/login_test';
		self.data = '{"username":"samdev","password":"123456"}';
		self.promise = OperrHttpService.post(self.pattern, self.data);
		self.promise
		.then(
			function(response){
				self.result = response.data;
				if(self.result.result == "SUCCESS"){
					$window.location.href = '#/admin/dashboard/view';
				}else{
					alert("Invalid username/password.");
				}
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
