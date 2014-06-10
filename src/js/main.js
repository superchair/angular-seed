'use strict';
var angularSeed = angular.module('AngularSeed', []);

angularSeed.controller('ctrlOne', function($scope) {
    $scope.bob = 'bob';
});

angularSeed.controller('ctrlTwo', function($scope) {
    $scope.ann = 'ann';
});

angularSeed.controller('ctrlThree', function($scope) {
    $scope.bob = 'different_bob';
});
