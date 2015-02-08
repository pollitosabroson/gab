'use strict';

/**
 * @ngdoc function
 * @name gaboApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gaboApp
 */
angular.module('gaboApp')
  .controller('MenuCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
