'use strict';

angular.module('coreApp.header',[])
.component('appHeader', {
	templateUrl: 'components/header/header.template.html',
	controller: function headerController() {
    this.name = 'header';
  }
});