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
                    templateUrl: 'views/home.html'
                })

                .state('help', {
                    url: '/help',
                    templateUrl: 'views/help.html'
                })

                .state('contact', {
                    url: '/contact',
                    templateUrl: 'views/contact.html'
                })
        }]);