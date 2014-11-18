/**
 * Created by antoine on 10/21/14.
 */

angular.module('evee')
    .config([ '$translateProvider',
        function ($translateProvider) {

            $translateProvider.translations('en', {
                APP_NAME: 'Evee',
                ENGLISH: 'English',
                FRENCH: 'French',
                JAPANESE: 'Japanese',
                LANGUAGES: 'Languages',
                I_AM_THE_HOME: 'I am the home',
                CONNECTION:'Connection',
                MAIL:'Mail',
                PASSWORD:'Password',
                HELP: 'Help',
                NAME: 'Name',
                ABOUT: 'About Evee',
                HISTORY:'Project\'s History',
                DATA: 'Use of personal data',
                LEGAL: 'Legal notices',
                CONTACT: 'Contact us'
            });
        }

    ]);