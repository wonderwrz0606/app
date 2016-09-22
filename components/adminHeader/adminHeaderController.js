'use strict';

angular.module('coreApp.adminHeader',[
	'adminLoginService'
])

.component('adminHeader', {
	templateUrl: 'components/adminHeader/adminHeader.html',
	controller: function adminHeaderController($window, $location, AdminLoginService) {
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
						alert('header:' + response.data.result);
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
					alert('logout: ' + response.data.result);
					console.log('logout: ' + response.data.result);
					if(response.data.result == "SUCCESS"){
						AdminLoginService.setAdmin('');
						AdminLoginService.setHeaderMenu('');
						// $location.url('#/admin/login/view');
						$window.location.href = "#/admin/login/view";
					}
				}, function(response){

				}
			);
		}
	}
});
