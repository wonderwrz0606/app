'use strict';

angular.module('coreApp.version', [
  'coreApp.version.interpolate-filter',
  'coreApp.version.version-directive'
])

.value('version', '0.1');
