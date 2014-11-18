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
                .state('about', {
                    url: '/about',
                    templateUrl: 'views/about.html'
                })
                .state('data', {
                    url: '/date',
                    templateUrl: 'views/data.html'
                })
                .state('legal', {
                    url: '/legal',
                    templateUrl: 'views/legal.html'
                })
        }]);