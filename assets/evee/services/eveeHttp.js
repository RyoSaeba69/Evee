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
            postForm: function(url, jsonData, config){



                var formConfig = {
                    method  : 'POST',
                    url     : url,
                    transformRequest: function(obj) {
                        var str = [];
                        for(var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },
                    data : jsonData,
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
                };

                return $http(formConfig);
            },
            jsonp: function(url, config){
                return $http.jsonp(url, config);
            }
        };

    }]);