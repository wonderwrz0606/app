'use strict';

angular.module('coreService')
//First way to write service in Angular: service
//.service('OperrHttpService', function ($http, CONFIG) {
//	this.testConstant = function(){
//		return CONFIG.DOMAIN;
//	};
//
//	this.get = function(pattern, data){
//		$http.get(CONFIG.DOMAIN + pattern)
//		.then(function(response){
//			console.log(response);
//			return response;
//		}, function(response){
//			console.log(response);
//			return response;
//		});
//	};
//
//	this.post = function(pattern, data){
//		$http.post(CONFIG.DOMAIN + pattern, data)
//		.then(function(response){
//			console.log(response);
//			return response;
//		}, function(response){
//			console.log(response);
//			return response;
//		});
//	};
//});

//Second way to write service in Angular: factory
.factory('HttpService', function($http, CONFIG) {
	var promise;

	return {
		get : getHttpService,
		post : postHttpService
	};

	function getHttpService(pattern, data) {
        promise = $http({
        	method: 'GET',
        	url: CONFIG.DOMAIN + pattern,
        	params: data
	    });
		return promise;
	}

	function postHttpService(pattern, data) {
		promise = $http({
        	method: 'POST',
        	url: CONFIG.DOMAIN + pattern,
        	data: data
	    });
		return promise;
	}
});

//.factory('OperrTargetService', function(){
//	var target;
//
//	return{
//		setTarget: setTarget,
//		getTarget: getTarget
//	}
//
//	function setTarget(_target){
//		target = _target;
//	}
//
//	function getTarget(){
//		return target;
//	}
//});
