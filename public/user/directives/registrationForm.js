/**
 * Created by Jean-François on 25/11/2014.
 */
angular.module('evee.user')
    .directive('registrationForm', function(){
        return{
            restrict:'E',
            templateUrl:'user/templates/registrationForm.html',
            link:function(scope){
                scope.user = {login:'', password:'', password2:''}

                scope.registration= function(user) {

                };
            }

        }
    });