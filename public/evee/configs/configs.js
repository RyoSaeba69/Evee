/**
 * Created by antoine on 10/21/14.
 */

angular.module('evee')
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: '/views/home.html'
                })

        }]);