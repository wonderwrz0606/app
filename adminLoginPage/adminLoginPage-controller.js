'use strict';

angular.module('adminLoginPage', ['ngRoute'])

.controller('adminLoginPageCtrl', function($scope, $http) {
	var self = this;
	self.name = "haha";
	self.status = "";
	self.header = "";
	$http.defaults.headers.common['Authorization'] = "deng yang sha~~~~~"; // jshint ignore:line
	
	self.login = function(){
			$http.post('/laravel/public/admin/login_test','{"username":"' + self.username + '","password":"' + self.password + '"}')
			.then(function(response){
				self.status = response.data.status;
				self.header = response.data.header;
			}, function(response){
				slef.status = response.data.status;
				self.header = response.data.header;
		});
	}
});
