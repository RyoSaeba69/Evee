/**
 * Created by antoine on 12/7/14.
 */

angular.module('evee')
    .factory('authService', ['AUTH_EVENT', '$rootScope', 'eveeHttp', '$state', 'toastr', '$translate',

        function (AUTH_EVENT, $rootScope, eveeHttp, $state, toastr, $translate) {

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

                    var self = this;

                    if(!user){
                        return;
                    }
                    eveeHttp.get('logout')
                        .success(function (data) {
                            if(data) {
                                self.setUser(null);
                            }

                            $translate('SUCCESSFULLY_LOGOUT').then(function (translation) {
                                toastr.success
                                (translation);
                            }, function () {
                                toastr.error('Jesus')
                            });

                            $state.go('home');
                        });
                },
                login: function (user, callback) {
                    var self = this;
                    eveeHttp.postForm('/auth/local', user)
                        .success(function(data, statut, headers, config){


                            if(data) {
                                self.setUser(data);
                                $translate('SUCCESSFULLY_LOGIN').then(function (translation) {
                                    toastr.success(translation);
                                }, function () {
                                    toastr.success('Jesus');
                                });
                            } else {
                                $translate('INVALID_EMAIL_OR_PASSWORD').then(function (translation) {
                                    toastr.error(translation);
                                }, function () {
                                    toastr.error('Jesus');
                                });
                            }

                            if(callback){
                                callback(data);
                            }


                        });

                }

            };

        }]);