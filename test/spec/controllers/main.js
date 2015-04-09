'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('yoToDoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of todos to the scope', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('should add an item to the existing todo list', function () {
    scope.todo = 'Item';
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
  });

  it('should remove an item from the todo list', function () {
    scope.todo = 'Item 1'
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(0);
  });
});
