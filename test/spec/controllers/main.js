'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('yoToDoApp'));

  var MainCtrl,
    scope,
    localStorageService,
    store = [];

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _localStorageService_) {
    store = []; //clear the store before each test
    scope = $rootScope.$new();
    localStorageService = _localStorageService_;

    //mock localStorageService get/add
    spyOn(localStorageService,'get').and.callFake(function(key) {
      return store[key];
    });

    spyOn(localStorageService,'set').and.callFake(function(key, val) {
      store[key] = val;
    });

    //Instantiate controller to test
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      localStorageService: localStorageService
    });
  }));

  it('should attach a list of todos to the scope', function () {
    expect(localStorageService.get).toHaveBeenCalledWith('todos');
    expect(scope.todos.length).toBe(0);
  });

  it('should add an item to the existing todo list', function () {
    scope.todo = 'Item';
    scope.addTodo();
    scope.$digest();
    expect(localStorageService.set).toHaveBeenCalledWith('todos', [ 'Item' ]);
    expect(scope.todos.length).toBe(1);
  });

  it('should remove an item from the todo list', function () {
    scope.todo = 'Item 1';
    scope.addTodo();
    scope.$digest();
    expect(localStorageService.set).toHaveBeenCalledWith('todos', [ 'Item 1' ]);
    expect(scope.todos.length).toBe(1);
    scope.removeTodo(0);
    scope.$digest();
    expect(localStorageService.set).toHaveBeenCalledWith('todos', []);
    expect(scope.todos.length).toBe(0);
  });
});
