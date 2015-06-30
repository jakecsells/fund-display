'use strict';

angular.module('fundDisplayApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngTable'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/common/views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
