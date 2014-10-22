myApp.controller('categoriesCtrl',
    ['$scope', '$rootScope', '$translate',
    '$location', '$route', '$modal', '$window',
     '$routeParams', 
    function($scope, $rootScope, $translate,
        $location, $route, $modal, $window, $routeParams)
        {
            
        $scope.categories = [{"type":"Food","pattern":"/^(banana|lemon|mango|pineapple)$/"},

	{"type":"Transport","pattern":"/^(bus|train|flight|hotel)$/"},

{"type":"Entertainment","pattern":"/^(movie|play|bookmyshow|screen)$/"},

{"type":"Apparels","pattern":"/^(jeans|pant|shirt|cloths)$/"},

{"type":"Groceries","pattern":"/^(beaverage|rice|dal|masala)$/"},

{"type":"Others","pattern":""}];

        


    }]);
