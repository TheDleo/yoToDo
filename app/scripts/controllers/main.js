'use strict';

/**
 * @ngdoc function
 * @name yoToDoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoToDoApp
 */
angular.module('yoToDoApp')
  .controller('MainCtrl', ['$scope','localStorageService', function ($scope, localStorageService) {
    console.log('main controller entered');
    var todosInStore = localStorageService.get('todos');

	$scope.todos = todosInStore || [];

	$scope.$watch('todos', function () {
	  localStorageService.set('todos', $scope.todos);

	}, true);

	$scope.addTodo = function () {
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    };
    $scope.removeTodo = function (index) {
    	$scope.todos.splice(index, 1);
    };
  }]);
