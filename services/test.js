angular
	.module('service',[])
	.factory('testService', ['$http', function ($http) {
		function query(){
			return "123";
		}
	}]);