myApp.controller('spendingsCtrl',
    ['$scope', '$rootScope', '$translate',
    '$location', '$route', '$modal', '$window',
     '$routeParams', 
    function($scope, $rootScope, $translate,
        $location, $route, $modal, $window, $routeParams)
        {
            
        $scope.spendings = [ 

{"data":"you bought sunglass for Rs.45 flipkart.com on 1/06/2014 10:00am"}, 

{"data":"you spent 100 Rs for your fuel Hp petrol bunk on 02/10/2014 2:00pm"},

{"data":"Rs 50 spent on foot ware xyz store on 05/09/2014 11:00am"}

];

        


    }]);
