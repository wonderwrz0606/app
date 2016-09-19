'use strict';

angular.module('adminDashboardPage', [
	'ngRoute',
	'ngAnimate',
  'ngTouch',
  'ui.bootstrap',
  'ngMap',
	'adminDashboardService',
	'adminLoginService',
	'coreApp.header',
	'coreApp.footer'
])

.controller('adminDashboardPageCtrl', function($scope, $http, $window, AdminDashboardService, AdminLoginService, NgMap) {
	var self = this;

	self.name = "adminDashboardPage";
	self.result ={};
	self.admin = AdminLoginService.getAdmin();
	if(typeof self.admin != "undefined" && self.admin.id != 0){
//		self.promise = OperrHttpService.get(self.pattern, self.data);
		self.promise = AdminDashboardService.get_dashboard_info();
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

// Add google map via NgMap Service
  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });

// Add google map via custom
	var mapOptions = {
        zoom: 14,
        maxZoom: 15,
     	center: new google.maps.LatLng(40.769873, -73.840992),
//     	center: new google.maps.LatLng(40.71278, -74.00594),
    	mapTypeId: google.maps.MapTypeId.ROADMAP
  };
	self.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

});
