'use strict';

angular.module('adminMgmtPage', ['ngRoute','service'])

.controller('adminMgmtPageCtrl', [function($scope, testService) {
  var self = this;
  self.name='adminMgmtPageName';
  self.service = testService.query();
}]);
