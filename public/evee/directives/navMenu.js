/**
 * Created by antoine on 10/28/14.
 */

angular.module('evee')
    .directive('navMenu', ['$translate', 'modalConnectionService',
        function ($translate, modalConnectionService) {
            return {

                restrict: 'E',
                templateUrl: 'evee/templates/navMenu.html',
                link: function (scope) {

                    var currentActive = null;

                    scope.leftMenus = [
                        {name: 'HOME', state: 'home'},

                    ];

                    scope.rightMenus = [
                        {
                            name: 'CONNECTION', menuClick: function () {
                            modalConnectionService.open();
                        }
                        },
                        {
                            name: 'USER',
                            icon:'fa fa-user',
                            subMenus: [{name: 'Profil', state: 'home'}, {name: 'Hour', state: 'home'}]
                        },
                        {
                            name: 'LANGUAGES',
                            icon:'fa fa-flag',
                            subMenus: [{name: 'FRENCH', langId: 'fr'}, {
                                name: 'ENGLISH',
                                langId: 'en'
                            }, {name: 'JAPANESE', langId: 'jp'}]
                        }
                    ];


                    scope.changeLanguage = function (langId) {
                        $translate.use(langId);
                    };

                    scope.setActive = function (menu) {
                        if (!menu.state) {
                            return;
                        }
                        if (currentActive) {
                            currentActive.isActive = false;
                        }

                        menu.isActive = true;
                        currentActive = menu;
                    };
                }
            };
        }]);