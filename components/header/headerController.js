'use strict';

angular.module('coreApp.header',[
	'adminLoginService'
])

.component('appHeader', {
	templateUrl: 'components/header/header.html',
	controller: function headerController($window, AdminLoginService) {
		var self = this;

		if(AdminLoginService.getAdmin()){
			self.admin = AdminLoginService.getAdmin();
			self.result = AdminLoginService.getHeaderMenu();
		}else{
			self.promise = AdminLoginService.getAdminInfo();
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
									self.result = response.data.data.menu_list;
									AdminLoginService.setHeaderMenu(self.menu);
								}else{
									// alert('HeaderController Error! No header info for this admin.');
								}
							},
							function(response){
								alert("HeaderController API Error!");
							}
						);
					}else{
						if(response.data.result == "ADMIN_LOGIN_EXPIRED"){
							self.logout();
						}
					}
				},
				function(response){
					alert("HeaderController API Error!");
				}
			);
		}

		self.logout = function(){
			self.promise = AdminLoginService.logout();
			self.promise
			.then(
				function(response){
					if(response.data.result == "SUCCESS"){
						$window.location.href = "#/admin/login/view";
					}
				}, function(response){

				}
			);
		}
	}
});
