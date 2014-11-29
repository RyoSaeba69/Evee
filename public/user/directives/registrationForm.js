/**
 * Created by Jean-François on 25/11/2014.
 */
angular.module('evee.user')
    .directive('registrationForm', ['eveeHttp', 'eveeLoader',
        function (eveeHttp, eveeLoader) {
            return {
                restrict: 'E',
                templateUrl: 'user/templates/registrationForm.html',
                link: function (scope) {
                    scope.user = {email: '', password: '', password2: ''}

                    scope.register = function (user) {

                        eveeLoader.show();

                        eveeHttp.post('users/save', {data: user})
                            .success(function (data, statut) {
                                console.log('data ==> ', data);
                                eveeLoader.hide();
                            });
                    };
                }

            }
        }]);