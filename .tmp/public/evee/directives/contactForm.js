/**
 * Created by quentin on 17/11/14.
 */
angular.module('evee')
    .directive('contactForm', function(){
        return{
            restrict:'E',
            templateUrl:'evee/templates/contactForm.html',
            link:function(scope){
                scope.user = {name: '', email:'',message: ''}

                scope.sendMail = function(user) {

                };
            }

        }
    });
