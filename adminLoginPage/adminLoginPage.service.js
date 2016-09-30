'use strict';

angular.module('coreApp.adminLogin')

.factory('AdminLoginService', function(HttpService, $cookies){
	var admin;
	var cookie;
	var menu;
	var pattern;
	var data;
	var promise;
  var self = this;

	return{
		setAdmin: setAdmin,
		getAdmin: getAdmin,
		getAdminInfo: getAdminInfo,
		// setLoginCookies: setLoginCookies,
		// getLoginCookies: getLoginCookies,
		login: login,
		getHeaderMenuInfo: getHeaderMenuInfo,
		setHeaderMenu: setHeaderMenu,
		getHeaderMenu: getHeaderMenu,
    logout: logout
	}

	function setAdmin(_admin){
		admin = _admin;
	}

	function getAdmin(){
		return admin;
	}

	function getAdminInfo(_username, _password){
		pattern = '/get_admin_info';
		data = '';
		promise = HttpService.get(pattern, data);
		return promise;
	}

	// function setLoginCookies(key, value){
	// 	$cookies.put(key, value);
	// }
	//
	// function getLoginCookies(key){
	// 	cookie = $cookies.get(key);
	// 	return cookie;
	// }

	function setHeaderMenu(_menu){
		menu = _menu;
	}

	function getHeaderMenu(){
		return menu;
	}

	function getHeaderMenuInfo(){
		pattern = '/get_admin_menu';
		data = '';
		promise = HttpService.get(pattern, data);
		return promise;
	}

	function login(_username, _password){
		pattern = '/login_test';
		data = '{"username":"' + _username + '","password":' + _password + '}';
		promise = HttpService.post(pattern, data);
		return promise;
	}

  function logout(){
    // self.setAdmin('');
    // self.setHeaderMenu('');
    pattern = '/logout';
		data = '';
		promise = HttpService.get(pattern, data);
		return promise;
  }
});
