'use strict';
var angularSeed = angular.module('AngularSeed', []);

angularSeed.directive('helloName', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/helloName.tmpl.html',
        replace: true,
        scope: {
            color: '@'
        },
        controller: function($scope) {

            $scope.onClick = function() {
                console.log('hi');
                if($scope.color == 'blue') {
                    $scope.color = 'red';
                }
                else {
                    $scope.color = 'blue';
                }
            };
        },
        link: function(scope, elem, attrs) {
            elem.attr('class', 'testclass');
        }
    };
});
