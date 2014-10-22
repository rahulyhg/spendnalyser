//'use strict';

/**********************************************************************************
 Common Controller
 **********************************************************************************/

myApp.controller('commonCtrl',
    ['$scope', '$rootScope', '$translate', '$modal', '$route',
    '$location', '$timeout',
 '$cookies', '$window',
    function($scope, $rootScope, $translate, $modal, $route, $location, constantValues, $timeout,
         $cookies, $window) {
		 
		 $scope.formData      = {};
  $scope.formData.date = "";
  $scope.opened        = false;
  
	//Datepicker
	$scope.dateOptions = {
		'year-format': "'yy'",
		'show-weeks' : false
	};
		 
		 $scope.category = {"type":"Others","pattern":""};

        $scope.categories = [{"type":"Food","pattern":"/^(banana|lemon|mango|pineapple)$/"},

	{"type":"Transport","pattern":"/^(bus|train|flight|hotel)$/"},

{"type":"Entertainment","pattern":"/^(movie|play|bookmyshow|screen)$/"},

{"type":"Apparels","pattern":"/^(jeans|pant|shirt|cloths)$/"},

{"type":"Groceries","pattern":"/^(beaverage|rice|dal|masala)$/"},

{"type":"Others","pattern":""}];

        $scope.changeRoute = function(nextLocation) {
            $location.path(nextLocation);
        };

        $scope.activePath = null;
        $scope.$on('$routeChangeSuccess', function() {
            $scope.activePath = $location.path();
        });

                
        $scope.searchMe = function(searchText){
            $location.path('/search/'+searchText);
        };
    }]);

/**********************************************************************************
 Alert Message Controller
 **********************************************************************************/
myApp.controller('alertMessageCtrl',
    ['$scope', '$modalInstance', 'items',
    function($scope, $modalInstance, items) {

        $scope.errorMessage = items;

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };
    }]);


