/**
 * Created by antoine on 12/7/14.
 */

angular.module('evee')
    .factory('authService', ['AUTH_EVENT', '$rootScope', 'eveeHttp',

        function (AUTH_EVENT, $rootScope, eveeHttp) {

            var user = null;

            return {

                setUser: function (loggedUser) {
                    if (loggedUser) {
                        user = loggedUser;
                        $rootScope.$broadcast(AUTH_EVENT.login);
                    } else {
                        user = loggedUser;
                        $rootScope.$broadcast(AUTH_EVENT.logout);
                    }
                },
                getUser: function () {
                    return user;
                },
                isLogged: function () {
                    return !!user;
                },
                logout: function () {
                    if(!user){
                        return;
                    }
                    eveeHttp.get('users/logout')
                        .success(function (data) {
                            if(data) {
                                user = null;
                                $rootScope.$broadcast(AUTH_EVENT.logout);
                            }
                        });
                },
                login: function (user) {
                    eveeHttp.postForm('users/login', user)
                        .success(function (data, statut, headers, config) {

                            eveeHttp.get('users/successlogin')
                                .success(function (data, statut, headers, config) {
                                    if (data) {
                                        this.setUser(data);
                                    }
                                });
                        });
                }

            };

        }]);