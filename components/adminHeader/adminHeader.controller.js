'use strict';

angular.module('coreApp.adminHeader')


.controller('adminHeaderCtrl', function($state, AdminLoginService) {
	var self = this;
	// $state.go('^');
	console.log('adminHeader');
});

// 'use strict';
//
// angular.module('coreApp.adminHeader')
//
// .component('adminHeader', {
// 	templateUrl: 'components/adminHeader/adminHeader.html',
// 	controller: function adminHeaderController($window, $location, AdminLoginService) {
// 		var self = this;
//
// 		if(AdminLoginService.getAdmin()){
// 			console.log('service exist');
// 			self.admin = AdminLoginService.getAdmin();
// 			self.result = AdminLoginService.getHeaderMenu();
// 		}else{
// 			self.promise = AdminLoginService.getAdminInfo();
// 			self.promise
// 			.then(
// 				function(response){
// 					if(response.data.result == "SUCCESS"){
// 						console.log('service not exist');
// 						self.admin = response.data.data.admin;
// 						AdminLoginService.setAdmin(self.admin);
//
// 						// Get request header menu
// 						self.promise = AdminLoginService.getHeaderMenuInfo();
// 						self.promise
// 						.then(
// 							function(response){
// 								if(response.data.result == "SUCCESS"){
// 									self.result = response.data.data.menu_list;
// 									AdminLoginService.setHeaderMenu(self.menu);
// 								}else{
// 									// alert('HeaderController Error! No header info for this admin.');
// 								}
// 							},
// 							function(response){
// 								alert("HeaderController API Error!");
// 							}
// 						);
// 					}else{
// 						alert('header:' + response.data.result);
// 						if(response.data.result == "ADMIN_LOGIN_EXPIRED"){
// 							self.logout();
// 						}
// 					}
// 				},
// 				function(response){
// 					alert("HeaderController API Error!");
// 				}
// 			);
// 		}
//
// 		self.logout = function(){
// 			self.promise = AdminLoginService.logout();
// 			self.promise
// 			.then(
// 				function(response){
// 					console.log('logout: ' + response.data.result);
// 					if(response.data.result == "SUCCESS"){
// 						AdminLoginService.setAdmin('');
// 						AdminLoginService.setHeaderMenu('');
// 						// $location.url('#/admin/login/view');
// 						$window.location.href = "#/admin/login/view";
// 					}
// 				}, function(response){
//
// 				}
// 			);
// 		}
// 	}
// });
