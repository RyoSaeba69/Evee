/**
 * Created by antoine on 10/28/14.
 */

angular.module('evee')
    .directive('navMenu', ['$translate',
       function($translate){
           return {

               restrict: 'E',
               templateUrl: 'evee/templates/navMenu.html',
               link: function(scope){

                   var currentActive = null;

                   scope.leftMenus = [
                       {name: 'A menu', state: 'home'},
                       {name: 'Active One !', state: 'home'},
                       {name: 'Son Goku :)', state: 'home'},
                       {name: 'Crazy menu ! ',
                           subMenus: [{name:'A sub', state: 'home'}, {name:'subway', state: 'home'}]
                       }
                   ];

                   scope.rightMenus = [
                       {name: 'Right is better !', state: 'home'},
                       {name: 'User',
                           subMenus: [{name:'Profile', state: 'home'}, {name:'Hour', state: 'home'}]
                       },
                      {name: 'LANGUAGES',
                       subMenus: [{name: 'FRENCH', langId: 'fr'}, {name: 'ENGLISH', langId: 'en'}, {name: 'JAPANESE', langId: 'jp'}]
                      }
                   ];


                   scope.changeLanguage = function(langId) {
                       $translate.use(langId);
                   };

                   scope.setActive = function(menu){

                       if(currentActive) {
                           currentActive.isActive = false;
                       }

                       menu.isActive = true;
                       currentActive = menu;
                   };
               }
           };
       }]);