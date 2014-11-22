/**
 * Created by antoine on 11/22/14.
 */


angular.module('evee')
    .factory('eveeHttp', ['$http', 'eveeLoader', function ($http, eveeLoader) {

        return {

            get: function (url, config) {
                return $http.get(url, config);
            },
            post: function (url, config) {
                return $http.post(url, config);
            },
            jsonp: function(url, config){
                return $http.jsonp(url, config);
            }
        };

    }]);