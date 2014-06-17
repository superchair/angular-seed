'use strict';
var angularSeed = angular.module('AngularSeed', [
    'SubModule',
]);

angularSeed.config(['myAgeProvider', function(myAgeProvider) {
    myAgeProvider.setInitialAge(20);
}]);

var subModule = angular.module('SubModule', ['SubModule']);

subModule.provider('myAge', function() {
    var myAge = 30;
    return {
        setInitialAge: function(age) {
            myAge = age;
        },

        $get: function() {
            return myAge;
        }
    };
});

subModule.directive('helloName', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/helloName.tmpl.html',
        replace: true,
        scope: {
            color: '@background'
        },
        controller: ['$scope', 'myAge', function($scope, myAge) {
            console.log(myAge);
        }],
        link: function(scope, elem, attrs) {
            elem.attr('class', 'testclass');
        }
    };
});
