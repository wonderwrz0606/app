'use strict';

angular.module('adminMgmt')

.controller('adminMgmtCtrl', function($scope, $routeParams, HttpService) {
	var self = this;
//	Get single admin info
	if($routeParams.adminId){
		self.data = '{"admin_id":' + $routeParams.adminId + '}';
		self.pattern = '/get_admin_info';
		self.promise = HttpService.get(self.pattern, self.data);
		self.promise
		.then(
			function(response){
				if(response.data.result == "SUCCESS"){
					self.admin = response.data.data.admin;
				}else{
					alert("adminMgmt Error! No info for admin.");
				}
			},
			function(response){
				alert("adminMgmt Error!");
			}
		);
	}else if($routeParams.createId){

	}
});
