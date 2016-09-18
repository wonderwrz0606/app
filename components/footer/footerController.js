'use strict';

angular.module('coreApp.footer',[])
.component('appFooter', {
	templateUrl: 'components/footer/footer.html',
	controller: function footerController() {
    this.name = 'footer';
  }
});