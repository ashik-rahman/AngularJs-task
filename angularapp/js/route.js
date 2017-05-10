module.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'html/test1.html',
            controller:  'RouteController1'
        })
        .state('about', {
             url: '/about',
            templateUrl: 'html/test2.html',
            controller:  'RouteController2'      
        });

});