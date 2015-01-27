/**
 * Created by antoine on 10/28/14.
 */

/**
 * Created by antoine on 10/21/14.
 */

angular.module('evee')
    .config([ '$translateProvider',
        function ($translateProvider) {

            $translateProvider.translations('jp', {
                APP_NAME: 'イビー',
                ENGLISH: '英語',
                FRENCH: 'フランス語',
                JAPANESE: '日本語',
                LANGUAGES: '語',
                I_AM_THE_HOME: 'ようこそのページ　です'
            });
        }

    ]);