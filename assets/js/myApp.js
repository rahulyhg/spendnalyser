/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

var myApp = angular.module("myApp", ['pascalprecht.translate',
    'ui.bootstrap',
    'ngRoute',
    'ngCookies'
]);


/*
 This directive allows us to pass a function in on an enter key to do what we want.
 */
myApp.directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if (event.which === 13) {
                scope.$apply(function() {
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});

myApp.directive("mydatepicker", function(){
  return {
    restrict: "E",
    scope:{
      ngModel: "=",
      dateOptions: "=",
      opened: "=",
    },
    link: function($scope, element, attrs) {
      $scope.open = function(event){
        console.log("open");
        event.preventDefault();
        event.stopPropagation();
        $scope.opened = true;
      };

      $scope.clear = function () {
        $scope.ngModel = null;
      };
    },
    templateUrl: 'datepicker.html'
  }
});

myApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'angularviews/home.html',
            controller: 'homePageCtrl',
            pageContext: 'Home'
        });
		
		$routeProvider.when('/categories', {
            templateUrl: 'angularviews/categories.html',
            controller: 'categoriesCtrl',
            pageContext: 'Categories'
        });
		
		$routeProvider.when('/spendings', {
            templateUrl: 'angularviews/spendings.html',
            controller: 'spendingsCtrl',
            pageContext: 'Spendings'
        });

        //Add the new bean routes for appjs here.

        $routeProvider.otherwise({
            redirectTo: "/home"

        });
    }]);

myApp.config(['$translateProvider', function($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'assets/js/properties/locale-',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');
    }]);


myApp.run(['$rootScope', function($root) {
        $root.$on('$routeChangeStart', function(e, curr, prev) {
            if (curr.$$route && curr.$$route.resolve) {
                // Show a loading message until promises are not resolved
                $(".overlay").show();
                $root.loadingView = true;
            }
        });
        $root.$on('$routeChangeSuccess', function(e, curr, prev) {
            // Hide loading message
            $(".overlay").hide();
            $root.loadingView = false;
        });
    }]);
