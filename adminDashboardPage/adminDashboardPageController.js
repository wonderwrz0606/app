'use strict';

//function initCall() {
//	console.log('Google maps api initialized.');
//	angular.bootstrap(document.getElementById('map-canvas'), ['coreApp.map']);
//}

//function initMap() {
//	alert(123);
//	console.log('test google map api.');
//    map = new google.maps.Map(document.getElementById('map-canvas'), {
//      center: {lat: -34.397, lng: 150.644},
//      zoom: 8
//    });
//}

angular.module('adminDashboardPage', [
	'ngRoute',
	'coreService',
	'coreApp.header',
	'coreApp.footer'
])

.controller('adminDashboardPageCtrl', function($scope, $http, $window, OperrHttpService, OperrLoginInfoService) {
	var self = this;
	self.name = "adminDashboardPage";
//	self.pattern = "/get_dashboard_info";
	self.pattern = "/rmget_dashboard_info";
	self.data = {};
	self.result ={};
	self.admin = OperrLoginInfoService.getAdmin();
	if(typeof self.admin != "undefined" && self.admin.id != 0){
		self.data = {admin_id: self.admin.id};
//		self.promise = OperrHttpService.get(self.pattern, self.data);
		self.promise = OperrHttpService.post(self.pattern, self.data);
		self.promise
			.then(
				function(response){
					if(response.data.result == "SUCCESS"){
						self.result = response.data.data;
					}else{
						alert("No info for this admin.");
					}
				},
				function(response){
					alert("adminDashboardPageController Error");
				}
			);
	}
});
