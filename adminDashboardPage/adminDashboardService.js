angular.module('adminDashboardService',[
  'coreService'
])

.factory('AdminDashboardService', function($http, HttpService, CONFIG) {
  var promise;

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
