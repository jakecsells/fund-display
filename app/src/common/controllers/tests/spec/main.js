'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('fundDisplayApp'));

  var MainCtrl,
    scope
    httpMock;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    httpMock = $httpBackend;
    scope = $rootScope.$new();

    httpMock.when('GET', 'fund.json').respond("a json file");

    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));
  it("gets the json and creates an object", function() {
      httpMock.expectGET('fund.json');
      httpMock.flush();
      expect(scope.orderFormList).toMatch("an ");
  });
  it('should add replace "" and "-" to "- -" when called', function (){
    //set up.
    $scope.fundData[0] = "";
    //expect 
    expect($scope.fundData[0]).toEqual("- -");
  });

});
