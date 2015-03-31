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
                .state('profil', {
                    url: '/profil',
                    templateUrl: 'view/profil.html'
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
                .state('registration', {
                    url: '/registration',
                    templateUrl: 'views/registration.html'
                })
                .state('event', {
                    url: '/event/:eventId',
                    templateUrl: 'views/ihmEvent.html',
                    controller: ['$scope', '$stateParams',
                        function ($scope, $stateParams) {
                            $scope.eventId = $stateParams.eventId;
                        }]
                })
        }]);