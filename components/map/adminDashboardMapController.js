'use strict';

//var map;
//function initMap() {
//  map = new google.maps.Map(document.getElementById('map-canvas'), {
//    center: {lat: -34.397, lng: 150.644},
//    zoom: 8
//  });
//}

angular.module('coreApp.map',[])
.component('adminDashboardMap', {
	templateUrl: 'components/map/adminDashboardMap.template.html',
	controller: function adminDashboardMapController() {
		var self = this;
		self.name = 'map_template';
    }
});