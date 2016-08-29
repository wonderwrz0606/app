angular.module('coreService',[])
//First way to write service in Angular: service
//.service('OperrHttpService', function ($http, CONFIG) {
//	this.testConstant = function(){
//		return CONFIG.DOMAIN;
//	};
//	
//	this.get = function(pattern, data){
//		$http.get(CONFIG.DOMAIN + pattern, data)
//		.then(function(response){
//			console.log(promise);
//			return response.data;
//		}, function(response){
//			console.log(promise);
//			return response.data;
//		});
//	};
//	
//	this.post = function(pattern, data){
//		$http.post(CONFIG.DOMAIN + pattern, data)
//		.then(function(response){
//			console.log(promise);
//			return response.data;
//		}, function(response){
//			console.log(promise);
//			return response.data;
//		});
//	};
//});

//Second way to write service in Angular: factory
.factory('OperrHttpService', function($http, CONFIG) {
	var promise;
	
	//Style 1
	//	return {
	//		get : get,
	//		post : post
	//	};
	//
	//	function get(pattern, data) {
	//        promise = $http({
	//        	method: 'GET',
	//        	url: CONFIG.DOMAIN + pattern,
	//        	params: data
	//	    });
	//		console.log(promise);
	//		return promise;
	//	}
	//
	//	function post(pattern, data) {
	//		promise = $http({
	//        	method: 'POST',
	//        	url: CONFIG.DOMAIN + pattern,
	//        	data: data
	//	    });
	//		console.log(promise);
	//		return promise;
	//	}

	//Style 2
	return {
	    get : function(pattern, data) {
	    	promise = $http({
	    		method: 'GET',
	    		url: CONFIG.DOMAIN + pattern,
	    		params: data
		    });
	    	console.log(promise);
	    	return promise;
	    },
	    post : function(pattern, data) {
	    	promise = $http({
	    		method: 'POST',
	    		url: CONFIG.DOMAIN + pattern,
	    		data: data
		    });
	    	console.log(promise);
	    	return promise;
		}
	}
});