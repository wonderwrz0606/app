'use strict';

angular.module('adminDashboard')

.factory('AdminDashboardService', function(HttpService, CONFIG) {
  var promise;
  var pattern;
  var data;

	return {
		get_dashboard_info : get_dashboard_info
	};

  function get_dashboard_info(){
		pattern = '/get_dashboard_info';
		data = '';
		promise = HttpService.get(pattern, data);
		return promise;
	}
});
