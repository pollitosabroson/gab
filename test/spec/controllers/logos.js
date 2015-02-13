'use strict';

describe('Controller: LogosCtrl', function () {

  // load the controller's module
  beforeEach(module('gaboApp'));

  var LogosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LogosCtrl = $controller('LogosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
