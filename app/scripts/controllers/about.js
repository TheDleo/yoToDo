'use strict';

/**
 * @ngdoc function
 * @name yoToDoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoToDoApp
 */
angular.module('yoToDoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
