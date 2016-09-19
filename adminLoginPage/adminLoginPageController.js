'use strict';

angular.module('adminLoginPage', [
	'ngRoute',
	'ngAnimate',
	'ngTouch',
	'ui.bootstrap',
	'adminLoginService',
	'coreApp.header',
	'coreApp.footer'
])

.controller('adminLoginPageCtrl', function($scope, $http, $window, AdminLoginService) {
	var self = this;
	self.username = '';
	self.password = '';
	self.status = "FALSE";

// Login with the input username & password
	self.login = function(){
		self.promise = AdminLoginService.login(self.username, self.password);
		self.promise
		.then(
			function(response){
				if(response.data.result == "SUCCESS"){
					self.admin = response.data.data.admin;
					AdminLoginService.setAdmin(self.admin);

					// Get request header menu
					self.promise = AdminLoginService.getHeaderMenuInfo();
					self.promise
					.then(
						function(response){
							if(response.data.result == "SUCCESS"){
								self.menu = response.data.data.menu_list;
								AdminLoginService.setHeaderMenu(self.menu);
								$window.location.href = '#/admin/dashboard/view';
							}else{
								alert('AdminLoginPageController Error! No header info for this admin.');
							}
						},
						function(response){
							alert("AdminLoginPageController API Error!");
						}
					);
				}else{
					alert("AdminLoginPageController Error! Invalid username/password.");
				}
			},
			function(response){
				alert("AdminLoginPageController API Error!");
			}
		);
	}
});
