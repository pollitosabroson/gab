'use strict';

/**
 * @ngdoc function
 * @name gaboApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gaboApp
 */
angular.module('gaboApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
