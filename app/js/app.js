'use strict';

angular.module('myApp', ['myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/amir-suhail', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});
    $routeProvider.otherwise({redirectTo: '/amir-suhail'});
  }]);
