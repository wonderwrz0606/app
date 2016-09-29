'use strict';

angular.module('adminLogin')

.controller('adminLoginCtrl', function($scope, $http, $window, AdminLoginService) {
	var self = this;
	self.username = '';
	self.password = '';
	self.status = "FALSE";

// Check if already login
	if(AdminLoginService.getAdmin()){
		$window.location.href = '#/admin/dashboard/view';
	}

// Login with the input username & password
	self.login = function(){
		self.promise = AdminLoginService.login(self.username, self.password);
		self.promise
		.then(
			function(response){
				if(response.data.result == "SUCCESS"){
					self.status = "SUCCESS";
					self.admin = response.data.data.admin;
					AdminLoginService.setAdmin(self.admin);

					// Get header menu
					self.promise = AdminLoginService.getHeaderMenuInfo();
					self.promise
					.then(
						function(response){
							if(response.data.result == "SUCCESS"){
								self.result = response.data.data.menu_list;
								AdminLoginService.setHeaderMenu(self.result);
								$window.location.href = '#/admin/dashboard/view';
							}else{
								alert('AdminLoginController Error! No header info for this admin.');
							}
						},
						function(response){
							alert("AdminLoginController API Error!");
						}
					);
				}else{
					alert("AdminLoginController Error! Invalid username/password.");
				}
			},
			function(response){
				alert("AdminLoginController API Error!");
			}
		);
	}
});
