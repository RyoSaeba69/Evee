/**
 * Created by antoine on 10/21/14.
 */

angular.module('evee')
    .config([ '$translateProvider',
        function ($translateProvider) {

            $translateProvider.translations('en', {
                'APP_NAME': 'Evee'
            });
        }

    ]);