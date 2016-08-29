'use strict';

angular.module('adminLoginPage', ['ngRoute','coreService'])

.controller('adminLoginPageCtrl', function($scope, $http, $window, OperrHttpService) {
	var self = this;
//	$http.defaults.headers.common['Authorization'] = "Isjimo";
	
	self.login = function(){
		self.pattern = '/login_test';
		self.data = '{"username":"samdev","password":"123456"}';
		self.result = OperrHttpService.post(self.pattern, self.data);
		alert(self.result.data);
		if(self.result.status == "SUCCESS"){
			$window.location.href = '#/admin/dashboard/view';
		}
		else{
			alert("FAIL");
		}
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
